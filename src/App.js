import React, { Component } from 'react'
import Navbars from './Components/Navbars'
import News from './Components/News'

export default class App extends Component {
  render() {
    return (
      <div>
      <Navbars/>
      <News/>
    </div>
    )
  }
}

