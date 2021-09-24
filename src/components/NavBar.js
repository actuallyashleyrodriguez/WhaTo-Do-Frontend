  
import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

  return (
    <div className="nav">
      <Link to='/tasks'> All Tasks  </Link> | 
      <Link to='/tasks/new'> Add Task</Link> |
      <Link to='/notes'> All Notes  </Link>
      | <Link to='/notes/new'> Add Note</Link>
    </div>

  )
}

export default NavBar