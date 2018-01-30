import React, { Component } from 'react'
import Paper from 'material-ui/Paper';

export default class Test extends Component {
  componentDidMount () {
    console.log('props in component', this.props)
  }
  render () {
      const style = {
        height: 310,
        width: 350,
        margin: 20,
        display: 'inline-block',
      }


    return (
      <div>
      <Paper style={style} zDepth={5} rounded={false} >
        <p className='componentStyle'> Name: {this.props.someUserName}</p>
        <hr />
        <p className='componentStyle'> Email: {this.props.someUserEmail}</p>
        <hr />
        <p className='componentStyle'> Phone: {this.props.someUserPhone}</p>
        <hr />
        <p className='componentStyle'> Address: {this.props.someUserAddress}</p>
        <hr />
        <p className='componentStyle'> Postcode: {this.props.someUserPostcode}</p>
        <hr />
        <p className='componentStyle'> Date of birth: {this.props.someUserDate}</p>
      </Paper>
      </div>
    )
  }
}
