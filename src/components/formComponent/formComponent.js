import React, { Component } from 'react'
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import validator from 'validator';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import '../../style/style.css'


export default class Test extends Component {
  constructor (props) {
    super(props)
    this.state = {
     isValid: true,
     value: ''
   }

    this.changeName = this.changeName.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changePhone = this.changePhone.bind(this)
    this.changeAddress = this.changeAddress.bind(this)
    this.changePostcode = this.changePostcode.bind(this)
    this.changeDate = this.changeDate.bind(this)
    this.save = this.save.bind(this)
  }


  changeName ({target: {value, name}}) {
    let errors = {}
    if (name === 'someUserName' && (!value || value.length === 0)) {
    errors['nameError'] = 'This field should not be blank.'
    this.setState({
        isValid: false
    })
}
    this.props.changeStateProps('name', value)
  }

   changeEmail ({target: {value}}) {
    this.props.changeStateProps('email', value)

  }

  changePhone ({target: {value}}) {
    this.props.changeStateProps('phone', value)
  }

  changeAddress ({target: {value}}) {
    this.props.changeStateProps('address', value)
  }

  changePostcode ({target: {value}}) {
    this.props.changeStateProps('postcode', value)
  }

  changeDate ({target: {value}}) {
    this.props.changeStateProps('date', value)
  }

  save() {

    if (!this.state.isValid) {
        return
    }

    if (this.state.isValid) {
        window.location.reload();
        this.setState({
            user: {
                someUserName: '',
                someUserEmail: '',
                someUserPhone: '',
                someUserAddress: '',
                someUserPostcode: '',
                dateOfBirth: null,
            }
        })
    }
  }

  render () {

      const required = (value) => {
       if (!value.toString().trim().length) {
         return <span className="error"> require* </span>
       }
     }

      const email = (value) => {
       if (!validator.isEmail(value)) {
         return <span className="error"> {value} is not a valid email.</span>
       }
      }

    return (
     <div className="fields" >
       <Paper className="paper" zDepth={5} rounded={false} >
         <Form>
            <Input
              className="name"
              name="name"
              type="text"
              placeholder="Name"
              onChange={this.changeName}
              validations={[required]}
            />

            <Input
              className="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={this.changeEmail}
              validations={[required, email]}
            />

            <Input
              className='phone'
              maxLength="16"
              placeholder="Enter phone number"
              type="tel"
              onChange={ this.changePhone }
            />

            <Input
              className="address"
              type="text"
              placeholder="Address"
              onChange={this.changeAddress}
            />

            <Input
              className="postcode"
              name="postcode"
              type="text"
              placeholder="Postcode"
              onChange={this.changePostcode}
              validations={[required]}
            />

            <Input
              className="date"
              name="calendar"
              type="date"
              placeholder="Date of birth"
              onChange={this.changeDate}
              validations={[required]}
            />

            <RaisedButton
              className="btn"
              label="Save"
              primary={true}
              onClick={this.save}>
            </RaisedButton>
          </Form>
        </Paper>
      </div>
    )
  }
}
