import React, {Component} from 'react'

class EmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeId: null,
      loginSuccess: false,
      isLoaded: false,
      password: '',
      departmentId: '',
      items: [],
      items2: [],
      items3: [0],
    };
  }
  componentDidMount(query) {
    return fetch('/failte/employee')
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoaded: true,
            items: json,
          })
        })
  }
  messageButtonClicked(){
        if(!this.state.employeeId == ''){
            if(this.state.employeeId > 0 && this.state.employeeId !== null){ 
                    if(!this.state.password == '') { 
                      console.log(this.state.items3[0].password)
                      if(this.state.password == this.state.items3[0].password) {
                        localStorage.setItem('loggedIn', true);
                        window.location = 'http://localhost:3000/appointments';
                      } else { window.alert('Password entered is not correct') }
                    } else { window.alert('Please ensure to fill in a password') }
                } else { window.alert('Please ensure a valid employee') } 
        } else { window.alert('Please ensure to select a valid employee');  
        }
  }
  handleChanges(value) {
        fetch('/failte/search/employee/' + value)
            .then(res => res.json())
            .then(json => {
                this.setState({ items2: json });
                this.setState({ employeeId: this.state.items2[0].employeeId });
                this.setState({ departmentId: this.state.items2[0].departmentId });
                localStorage.setItem('eID', this.state.items2[0].employeeId);
                localStorage.setItem('dID', this.state.items2[0].departmentId);
            }).catch(error => { console.log(error) })
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
      fetch('/failte/departments')
                      .then(res => res.json())
                      .then(json => {
                        this.setState({ items3: json }) })
    console.log(this.state)
  };
  render() {
    return (
        <div className="container">
            <div className='form-group'>
              <label>Employee</label><br/>
        <input  className="form-control" list="employees" name="employeeId" placeholder="Please Choose..." onChange={event => this.handleChanges(event.target.value)}/>
        <datalist id="employees">
          {this.state.items.map(item => (
              <option key={item.employeeId} value={item.employeeName}></option>
          ))}
        </datalist>
            </div>
      <div className='form-group'>
        <label htmlFor="Pass">Password</label>
        <input className="form-control" type="Password" name="password" placeholder="Enter your password" onChange={(event) => this.handleChange(event)}/>
      </div>
      <div className='form-group'>
        <button className="btn btn-primary" onClick={this.messageButtonClicked.bind(this)}>Confirm</button>
      </div>
      </div>
  )
  }
}
export default EmployeeComponent