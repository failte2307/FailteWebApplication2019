import React, {Component} from 'react'

class VisitorCreateComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
         visitorName: '',
         phone: '',
         purpose: 'Interview',
         employeeId: null,
         email: '',
         items: [],
         isLoaded: false,
         items2: [],
      };
  }
    componentDidMount(query) {
        return fetch('/failte/employee')
            .then(res => res.json())
            .then(json => { this.setState({ isLoaded: true, items: json }) })
    }
    messageButtonClicked(){
        if(!this.state.visitorName == ''){
            if(!this.state.visitorName.length < 50){ 
                if(this.validateName(this.state.visitorName)){
                    if(!this.state.phone == '') {
                        if(this.state.employeeId > 0 && this.state.employeeId !== null) {
                            fetch('/failte/createappointment',{
                                method: 'POST',
                                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                    visitorName: this.state.visitorName,
                                    purpose: this.state.purpose,
                                    employeeId: this.state.employeeId,
                                    phone: this.state.phone,
                                    email: this.state.email
                                })
                            })
                                .then(response => response.json())
                                .then(response => { console.log(response) });
                            console.log("Appointment Added Successfully");
                           window.location = 'http://localhost:3000/message/';
                        } else { window.alert('Please ensure to fill in an employee to meet'); }
                    } else { window.alert('Please ensure to fill in a phone number'); }
                } else { window.alert('Please ensure visitor name is valid format'); }
            } else { window.alert('Visitor Name cant be longer than 50 characters'); } 
        } else { window.alert('Please ensure to fill in a visitor name'); }
    }
    clickButton (){
        this.messageButtonClicked();
    }
    validateName(name){
        let validString = /^[a-zA-Z' ]+$/
        return validString.test(String(name).toString());
    }
    handleChanges(value) {
        fetch('/failte/search/employee/' + value)
            .then(res => res.json())
            .then(json => {
                this.setState({ items2: json });
                this.setState({ employeeId: this.state.items2[0].employeeId });
                this.setState({ email: this.state.items2[0].email });
                console.log(this.state);
            }).catch(error => { console.log(error) })
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state);
    };

    render() {
        const {isLoaded} = this.state;

    if (!isLoaded) {
      return <div>Loading....</div>;
    } else {
    return (
        <div className="container">
          <div className='form-group'>
            <label>Visitor</label><br/>
            <input className="form-control" name="visitorName"
                   placeholder="Please enter your name..." onChange={(event) => this.handleChange(event)}/>
          </div>
          <div className='form-group'>
            <label>Phone Number</label>
            <input className="form-control" name="phone"
                   placeholder="Enter your phone number..." onChange={(event) => this.handleChange(event)}/>
          </div>
            <div className='form-group'>
                <div className="form-group">
                    <label>Reason for Visit:</label>
                    <select className="form-control" name="purpose" onChange={(event) => this.handleChange(event)}>
                        <option value="" name='purpose' disabled defaultValue hidden>Please Choose...</option>
                        <option value="Interview" name='purpose'>Interview</option>
                        <option value="Delivery" name='purpose'>Delivery</option>
                        <option value="Careers" name='purpose'>Careers</option>
                        <option value="Maintenance" name='purpose'>Maintenance</option>
                        <option value="FoodieFriday" name='purpose'>Foodie Friday</option>
                        <option value="Other" name='purpose'>Other</option>
                    </select>
                    <label>Employee to Meet:</label><br/>
                    <input  className="form-control" list="employees" name="employeeId" placeholder="Please Choose..." onChange={(event) => this.handleChanges(event.target.value)}/>
                    <datalist id="employees">
                        {this.state.items.map(item => (
                            <option key={item.employeeId} value={item.employeeName}>{item.employeeName}</option>
                        ))}
                    </datalist>
                </div>
            </div>
          <div className='form-group'>
              <button className="btn btn-primary" onClick={this.clickButton.bind(this)}>Confirm</button>
          </div>
        </div>
            )
        }
    }
}

export default VisitorCreateComponent