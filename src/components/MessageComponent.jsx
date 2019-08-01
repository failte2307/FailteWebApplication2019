import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class MessageComponent extends Component {
  render() {
    return ( 
        <h2>Task has been completed, click <Link to="/">here</Link> to return home</h2>
    )
  }
}
export default MessageComponent
