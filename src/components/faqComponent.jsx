import React, {Component} from 'react'
import { MDBCard, MDBCardBody, MDBCardText, MDBCardHeader } from "mdbreact";

class faqComponent extends Component {
  render () {
    return (
      <div className='container'>
        <br/>
        <h1>F.A.Q</h1>
        <MDBCard border="primary" className='container'  style={{ width: "40rem",  }}>
      <MDBCardHeader style={{ fontWeight: "bold", fontSize: "20px" }}>What do i do after pressing confirm?</MDBCardHeader>
      <MDBCardBody className="text-primary">
        <MDBCardText style={{color: "black", textAlign: "left"}}>
        Once you have clicked submit and the confirmation message appears, please click the return home link. From this, please take a seat in the lobby and wait for the employee to come meet you. <br/> <br/>
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
<br/>
    <MDBCard border="primary" className='container'  style={{ width: "40rem",  }}>
      <MDBCardHeader style={{ fontWeight: "bold", fontSize: "20px" }}>I'm an employee but don't know my login, what do I do?</MDBCardHeader>
      <MDBCardBody className="text-primary">
        <MDBCardText style={{color: "black", textAlign: "left"}}>
        If you can't remember the correct login information, please contact your department head. If they do not have the password, please contact CSC. Your department head will be provided with a new password that you may use for this purpose. <br/> <br/>
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
    <br/>
    <MDBCard border="primary" className='container'  style={{ width: "40rem",  }}>
      <MDBCardHeader style={{ fontWeight: "bold", fontSize: "20px" }}>How do I get back to the main page?</MDBCardHeader>
      <MDBCardBody className="text-primary">
        <MDBCardText style={{color: "black", textAlign: "left"}}>
        From this screen, please locate the white Home button in the top left of the blue banner at the top of the screen. Please click that button and you will find yourself back at the home page. <br/> <br/>
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
    <br/>
      </div>
    )
  }
}

export default faqComponent
