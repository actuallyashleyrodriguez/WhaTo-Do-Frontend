import React, { Component } from "react";
import { connect } from "react-redux";
import { updateNote } from "../actions/updateNote";

 class NoteUpdate extends Component {
    state = {
        description: '',
        task: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
          });
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.NoteUpdate(this.state)
        this.setState({
            description: '',
            task: ''
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>Update note</label>
                <input type="text" placeholder="Enter your note" value ={this.state.description} name="description" onChange={this.handleChange}/>
                <br/><br/>
                <input type="submit"></input>
                </form>
            </div>
        )
    }
}

export default connect(null, {updateNote})(NoteUpdate)