import React, { Component } from "react";
import { connect } from "react-redux";
import { addNote } from "../actions/addNote";

 class NoteInput extends Component {
    state = {
        description: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
          });
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addNote(this.state)
        this.setState({
            description: ''
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>Enter a new note</label>
                <input type="text" placeholder="Enter your note" value ={this.state.description} name="description" onChange={this.handleChange}/>
                <br/><br/>
                <input type="submit"></input>
                </form>
            </div>
        )
    }
}

export default connect(null, {addNote})(NoteInput)