import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {tittle,description} = this.props;
        return (
          <div>
                <div className="card" style={{width: "18rem"}}>
                     <img src="https://ichef.bbci.co.uk/news/1024/branded_news/00BF/production/_129719100_c8e05c9169498a3547ddd1cc67dfe1677693c18d0_226_3072_17283072x1728-1.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{tittle}</h5>
                        <p className="card-text">{description}</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
          </div>
        )
      }
}
