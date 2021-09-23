import React, { Component } from 'react'
import Tasks from '../components/Tasks'
import TaskInput from '../components/TaskInput'
import { fetchTasks } from '../actions/fetchTasks';
import { connect } from 'react-redux';
import {Route, Switch} from 'react-router-dom'
import Task from '../components/Task';

 class TasksContainer extends Component {

    componentDidMount() {
        this.props.fetchTasks()
        
    }
    render() {
        return (
            <div>
                <Switch>
                <Route path="/tasks/new" component={TaskInput}/>
                <Route path='/tasks/:id' render= {(routerProps)=> <Task {...routerProps}tasks={this.props.tasks}/>} />
                <Route exact path="/tasks" render={ (routerProps) =>  <Tasks {...routerProps} tasks={this.props.tasks}/>}/> 
                </Switch>    
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps, {fetchTasks})(TasksContainer)