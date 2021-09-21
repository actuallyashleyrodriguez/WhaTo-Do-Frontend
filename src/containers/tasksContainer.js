import React, { Component } from 'react'
import Tasks from '../components/Tasks'
import TaskInput from '../components/TaskInput'
import { fetchTasks } from '../actions/fetchTasks';
import { connect } from 'react-redux';

 class TasksContainer extends Component {

    componentDidMount() {
        this.props.fetchTasks()
        
    }
    render() {
        return (
            <div>
                <TaskInput/>
                <Tasks tasks={this.props.tasks}/>
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