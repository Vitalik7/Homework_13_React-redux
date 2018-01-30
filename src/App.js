import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css'
import FormComponent from './components/formComponent/formComponentContainer'
import SecondComponent from './components/secondComponent/secondComponentContainer'

class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <div className='App'>
          <FormComponent  />
          <SecondComponent />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
