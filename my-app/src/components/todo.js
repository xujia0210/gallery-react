import React from 'react';
import ReactDom from 'react-dom'
import { Router , Route , hashHistory , Link } from 'react-router-dom';
import Three from './three'

// import { clearScreenDown } from 'readline';

class Todo extends React.Component {
  render() {
    return (
      <div>
        <h1>react router</h1>
        <Link to="/Three">Three</Link>
      </div>
    )
  }
}

export default Todo;