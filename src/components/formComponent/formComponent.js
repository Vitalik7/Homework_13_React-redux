import React, { Component } from 'react'
import Paper from 'material-ui/Paper';
 import TextField from 'material-ui/TextField';
import Phone from 'react-phone-number-input'
import rrui from 'react-phone-number-input/rrui.css'
import rpni from 'react-phone-number-input/style.css'
import '../../style/style.css'


export default class Test extends Component {
  constructor (props) {
    super(props)
    this.state = {

     value: ''
   }

    this.changeName = this.changeName.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changePhone = this.changePhone.bind(this)
    this.changeAddress = this.changeAddress.bind(this)
    this.changePostcode = this.changePostcode.bind(this)
    this.changeDate = this.changeDate.bind(this)
  }

  componentDidMount () {
    console.log('props in component', this.props)
  }

  changeName ({target: {value}}) {
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

  render () {
        const style = {
        height: 310,
        width: 350,
        margin: 20,
        marginLeft: 140,
        display: 'inline-block',
      }
    return (
     <div className="fields" >
       <Paper style={style} zDepth={5} rounded={false} >

          <TextField
            className="name"
            name="name"
            type="text"
            placeholder="Name"
            onChange={this.changeName}

          />

          <TextField
            className="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={this.changeEmail}
          />

          <TextField
            className='phone'
            maxLength="16"
            placeholder="Enter phone number"
            type="tel"
            onChange={ this.changePhone }
          />

          <TextField
            className="address"
            type="text"
            placeholder="Address"
            onChange={this.changeAddress}
          />

          <TextField
            className="postcode"
            name="postcode"
            type="number"
            placeholder="Postcode"
            onChange={this.changePostcode}
          />

          <TextField
            className="date"
            name="calendar"
            type="date"
            placeholder="Date of birth"
            onChange={this.changeDate}
          />

        </Paper>
      </div>
    )
  }
}
