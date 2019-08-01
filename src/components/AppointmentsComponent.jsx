import React, {Component} from 'react'
import LinksComponent2 from './LinksComponent2'
import {BrowserRouter as Router} from "react-router-dom";

class AppointmentsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointmentID: null,
      items: [],
      isLoaded: false,
      loggedIn: false
    };
    this.signInClicked = this.signInClicked.bind(this);
  }
  componentDidMount(query) {
    return fetch('/failte/employee/' + parseInt(localStorage.getItem('eID')) + '/appointments/old')
        .then(res => res.json())
        .then(json => { this.setState({ isLoaded: true, items: json })    
        })      
  }
  signInClicked() { this.props.history.push(`/employee/${this.props.match.params.name}/appointments`) }
  
  render() {  
   return (
      <div className='container'>
        <table className='table'>
          <thead>
            <tr>
              <th>Visitor Name</th>
              <th>Purpose</th>
              <th>Arrival Time</th>
              <th>Sign In</th>
              <th>Sign Out</th>
            </tr>
          </thead>
            <tbody>
            { this.state.items.map((dynamicData) =>
                <tr key={dynamicData.arrivalTime} className="trow">
                <td>{dynamicData.visitorName}</td> 
                <td> {dynamicData.purpose} </td>
                <td> {dynamicData.arrivalTime} </td>
                <td><button onClick={this.signInClicked}>Sign In</button></td>
                <td><button onClick={this.signOutClicked}>Sign Out</button></td>
              </tr>)}
        </tbody>
      </table>
          <LinksComponent2/>
      </div>
    );
  }
}
export default AppointmentsComponent
