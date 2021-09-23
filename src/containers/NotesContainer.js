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
             {/*<Switch>
                <Route path="/notes/new" component={TaskInput}/>
                <Route path='/notes/:id' render= {(routerProps)=> <Task {...routerProps}tasks={this.props.tasks}/>} />
                <Route exact path="/notes" render={ (routerProps) =>  <Tasks {...routerProps} tasks={this.props.tasks}/>}/> 
             </Switch>  */}  
             {/*<NoteInput/>*/}
             <Notes notes={this.props.notes} />
            </div>
        )
    }
}
const mapStateToProps = state => {
     return {
        notes: state.noteReducer.notes
    }

}

export default connect(mapStateToProps, {fetchNotes}) (NotesContainer)


