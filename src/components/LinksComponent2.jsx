import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class LinksComponent2 extends Component {
  render() {
    return (
      <div className='container' style={{textAlign: 'right', marginBottom: '0px'}}>
        <Link to='/delEmp'>Delete Employee</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='/addEmployee'>Add Employee</Link>
      </div>
    )}}
export default LinksComponent2
