import React, { Component } from 'react'
import Notes from '../components/Notes'
import NoteInput from '../components/NoteInput'
import { fetchNotes } from '../actions/fetchNotes';
import { connect } from 'react-redux';
import {Route, Switch} from 'react-router-dom'
import Note from '../components/Note';

 class NotesContainer extends Component {

 componentDidMount() {
       this.props.fetchNotes()
        
}
    render() {
        return (
            <div> 
             <Switch>
             <Route path="/notes/new" component={NoteInput}/>
             <Route path='/notes/:id' render= {(routerProps)=> <Note {...routerProps}  notes={this.props.notes} tasks={this.props.tasks}/>} />
             <Route exact path="/notes" render={ (routerProps) =>  <Notes {...routerProps} notes={this.props.notes} tasks ={this.props.tasks}/>}/> 
             </Switch>
            </div>
        )
    }
}
const mapStateToProps = state => {
     return {
        notes: state.noteReducer.notes,
        tasks: state.taskReducer.tasks
    }

}

export default connect(mapStateToProps, {fetchNotes}) (NotesContainer)


