import React, {Component} from 'react'

class EmployeeAddComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departmentId: null,
            employeeName: '',
            telephoneNo: '',
            email: '',
            isLoaded: false,
            items: [],
            messageFailed: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.clickButton = this.clickButton.bind(this);
    }
    messageButtonClicked(){
        if(!this.state.departmentId == '') {
            if(!this.state.employeeName == ''){
                if(!this.state.employeeName.length < 50){ 
                    if(!this.state.telephoneNo == '') {
                        if(!this.state.email == '') {
                            if (this.validateEmail(this.state.email)) {
                                      fetch('/failte/createemployee',{ 
                                        method: 'POST', 
                                        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},
                                        body: JSON.stringify({
                                            departmentId: this.state.departmentId, employeeName: this.state.employeeName,
                                            telephoneNo: this.state.telephoneNo, email: this.state.email
                                        })
                                    })
                                        .then(response => response.json())
                                        .then(response => { console.log(response) });
                                        console.log("Employee Added Successfully");
                                    window.location = 'http://localhost:3000/message/'; 
                            } else { window.alert('Email format is invalid'); }
                        } else { window.alert('Please ensure to fill in an email address'); }
                    } else { window.alert('Please ensure to fill in a phone number'); }
                } else { window.alert('Employee Name cant be longer than 50 characters'); } 
            } else { window.alert('Please ensure to fill in a employee name'); }
        } else { window.alert('Please ensure to pick a department'); }
    }  
    clickButton() { this.messageButtonClicked() }
    
    componentDidMount(query) {
        return fetch('/failte/departments/')
            .then(res => res.json())
            .then(json => { this.setState({ isLoaded: true, items: json }) })
    }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
          console.log(this.state);
    };
    handleChanges(value, nodeName) {
        if(value === 'Software Development') { this.setState({ departmentId: 1, }); }
        else if(value === 'Software Testing') { this.setState({ departmentId: 2, }); } 
         else if(value === 'Security') { this.setState({ departmentId: 3, }); } 
        console.log(this.state); 
    }
    validateEmail(email){
        let re = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    validateName(name){
        let validString = /^[a-zA-Z ]+$/
        return validString.test(String(name).toString());
    }
    render() {
        const {isLoaded} = this.state;

    if (!isLoaded) {
      return <div>Loading....</div>;
    } else {
        return (
            <div className="container">
                <div className='form-group'>
                <label>Department</label><br/>
                <input  className="form-control" ref="departmentName" list="departments" name="departmentId" placeholder="Please Choose..."  onChange={event => this.handleChanges(event.target.value, event.target.name)}/>
                <datalist id="departments">
                {this.state.items.map(item => ( <option key={item.departmentName} value={item.departmentName}></option> ))}
                </datalist>
                </div> 
                <div className='form-group'>
                    <label htmlFor="employeeName">Employee Name</label>
                    <input className="form-control" ref="employeeName" type="text" name="employeeName" placeholder="Enter the Employee name you wish to add..." onChange={(event) => this.handleChange(event)}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="telNumber">Telephone Number</label>
                    <input className="form-control" ref="telephoneNo" type="text" name="telephoneNo" placeholder="Enter the telephone number of the employee you wish to add..." onChange={(event) => this.handleChange(event)}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email</label>
                    <input className="form-control" ref="email" type="email" name="email" placeholder="Enter the email address of the employee you wish to add..." onChange={(event) => this.handleChange(event)}/>
                </div>
                <div className='form-group'><button className="btn btn-primary" onClick={this.messageButtonClicked.bind(this)}>Confirm</button></div>
            </div>
            )}
    }}
export default EmployeeAddComponent