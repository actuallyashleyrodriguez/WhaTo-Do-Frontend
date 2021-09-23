import React, { Component } from "react";
import { connect } from "react-redux";
import { addTask } from "../actions/addTask";

 class TaskInput extends Component {
    state = {
        status: '',
        category: '',
        description: '',
        date: '',
        note: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
          });
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTask(this.state)
        this.setState({
            status: '',
            category: '',
            description: '',
            date: '',
            note: ''
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="eg: Home, School, Work" value ={this.state.category} name="category" onChange={this.handleChange}/>
                <label>Enter the Task Category</label>
                <br/><br/>
                <input type="text" placeholder="eg: Priority, Open, Pending" value = {this.state.status} name="status" onChange={this.handleChange}/>
                <label>Enter the Task Status</label><br/><br/>
                <input type="text" placeholder="Description of Task" value = {this.state.description} name="description" onChange={this.handleChange}/>
                <label>Enter the Task Description</label><br/><br/>
                <input type="text" placeholder="Notes for Task" value = {this.state.notes} name="notes" onChange={this.handleChange}/>
                <label>Enter any Notes for this Task</label><br/><br/>
                <input type="datetime-local" name="date" value={this.state.date} onChange={this.handleChange}/>
                <label>Enter the Due Date for the task</label><br/><br/>
                <input type="submit"></input>
                </form>
            </div>
        )
    }
}

export default connect(null, {addTask})(TaskInput)