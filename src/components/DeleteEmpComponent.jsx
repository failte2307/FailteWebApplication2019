import React, {Component} from 'react'

class DeleteEmpComponent extends Component{
    constructor(props) {
        super(props);
        this.state =
            {
                employeeId: null,
                items: [],
                isLoaded: null,
                items2: [],
                messageFailed: false
            };
    }
    componentDidMount(query) {
        return fetch('/failte/employee')
            .then(res => res.json())
            .then(json => {
              this.setState({ isLoaded: true, items: json })
            })
      }
    clickButton() {
        if(this.state.employeeId > 0 && this.state.employeeId !== null) {
            const requestOptions = { method: 'DELETE' };
            console.log(this.state.employeeId);
            fetch('/failte/deleteemployee/' + this.state.employeeId, requestOptions)
                .then((response) => { return response.json() })
                .then((result) => { console.log(result) });
        }
        else { window.alert('Employee needs to be selected!') }
    }
    handleChanges(value) {
        fetch('/failte/search/employee/' + value)
            .then(res => res.json())
            .then(json => {
                this.setState({ items2: json });
                this.setState({ employeeId: this.state.items2[0].employeeId });
                console.log(this.state);
            }).catch(error => {
            console.log(error);
        })
    }
    render() {
        return (
            <div className="container">
                <form>
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
                    <button className="btn btn-primary" onClick={this.clickButton.bind(this)}>Confirm</button>
                </div>
                </form>
            </div>
        )
    }
}
export default DeleteEmpComponent
