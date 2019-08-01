import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import MessageComponent from './MessageComponent'
import VisitorSignInComponent from './VisitorSignInComponent'
import VisitorCreateComponent from './VisitorCreateComponent.jsx'
import EmployeeComponent from './EmployeeComponent'
import AppointmentsComponent from './AppointmentsComponent'
import VisitorSignOutComponent from './VisitorSignOutComponent'
import ErrorComponent from './ErrorComponent'
import BannerComponent from './BannerComponent'
import LinksComponent from './LinksComponent'
import LinksComponent2 from './LinksComponent2'
import AboutComponent from './AboutComponent'
import EmployeeAddComponent from './EmployeeAddComponent'
import DeleteEmpComponent from './DeleteEmpComponent.jsx'
import faqComponent from './faqComponent';

class FailteApp extends Component {
  render() {
    return (
      <>
        <Router>
          <HeaderComponent/>
          <BannerComponent/>
          <Switch>
            <Route exact path='/' component={VisitorCreateComponent}/>
            <Route path='/message' component={MessageComponent}/>
            <Route path='/employee' component={EmployeeComponent}/>
            <Route path='/appointments' component={AppointmentsComponent}/>
            <Route path='/employee/:uname/appointments/:appointmentid/SignIn' component={VisitorSignInComponent}/>
            <Route path='/employee/:uname/appointments/:appointmentid/SignOut' component={VisitorSignOutComponent}/>
            <Route path='/about' component={AboutComponent}/>
            <Route path='/faq' component={faqComponent}/>
            <Route path='/addEmployee' component={EmployeeAddComponent}/>
            <Route path='/delEmp' component={DeleteEmpComponent}/>
            <Route component={ErrorComponent}/>
          </Switch>
        <LinksComponent/>
          <FooterComponent/>
        </Router>
      </>
    )
  }
}

export default FailteApp
