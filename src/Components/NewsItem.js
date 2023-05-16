import React, { Component } from 'react'

 class NewsItem extends Component {
    render() {
        let {tittle,description,imgUrl,newsUrl} = this.props;
        return (
          <div className="my-3">
          <div className="card" style={{width: "18rem"}}>
              <img src={imgUrl} className="card-img-top" alt="..."/>
              <div className="card-body">
                  <h5 className="card-title">{tittle}</h5>
                  <p className="card-text">{description}...</p>
                  <a href={newsUrl} className="btn btn-sm btn-primary" target='_blank'>Read More</a>
              </div>
          </div>
      </div>
        )
      }
}

export default NewsItem;