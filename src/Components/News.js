import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
 render(){
    return(
        <div>
            <NewsItem tittle="My title" description="desc"/>
        </div>
    )
 }
}