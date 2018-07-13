import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Label, FormControl, Button } from 'react-bootstrap'

class NewCat extends Component {
    constructor(props){
      super(props)
      this.state = {
        form:{
          name: '',
          age: '',
          enjoys: ''
        }
      }
    }

    handleChange(event) {

      let { form }  = this.state
      form[event.target.name] = event.target.value
      this.setState({form: form})
    }

  render() {
      let { form } = this.state
    return (
        <div>
            <div>
                <label className='name'>Name</label>
                <FormControl
                type="text"
                name="name"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.name}
                placeholder="Enter text" required/>
            </div><br/>
            <div>
                <label id='age'>Age</label>
                <FormControl
                type="text"
                name="age"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.age}
                placeholder="Enter text" required/>
            </div><br/>
            <div>
                <label id='enjoys'>Enjoys</label>
                <FormControl
                type="text"
                name="enjoys"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.enjoys}
                placeholder="Enter text" required/>
            </div><br/>
            <div>
                <Button onClick={()=>{this.props.handleSubmit(form)}} id='submit' bsSize="large" block>Create Cat Profile</Button>
                {this.props.success && <Redirect to="/cats" />}
            </div>
        </div>
    );
  }
}

export default NewCat;
