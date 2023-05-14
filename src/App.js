import React, { Component } from 'react'
import Navbars from './Components/Navbars'
import NewsItem from './Components/NewsItem'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <Navbars/>
        <div className="row">
          <div className="col-md-4">
        <NewsItem/>
          </div>
          <div className="col-md-4">
        <NewsItem tittle="myTitle" description="desc"/>
          </div>
          <div className="col-md-4">
        <NewsItem/>
          </div>
          <div className="col-md-4">
        <NewsItem/>
          </div>
        </div>
      </div>
    )
  }
}

