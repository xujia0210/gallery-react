import React from 'react'
import { Link } from 'react-router-dom'
class App extends React.Component{
  render() {
    return (
      <div>
        <h1>React Router learning</h1>
        <ul role="nav">
          {/* <li><Link to="/nav">nav</Link></li> */}
          <li><Link to="/home">home</Link></li>
        </ul>
      </div>
    )
  }
}

export default App;