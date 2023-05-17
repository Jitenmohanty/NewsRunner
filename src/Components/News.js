import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=in&apikey=90be9be749804afa89ebc311ca171d28&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let ParseData = await data.json();

    this.setState({
      articles: ParseData.articles,
      totalResults: ParseData.totalResults,
    });
    console.log(ParseData);
  }

  handlePrevPage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apikey=90be9be749804afa89ebc311ca171d28&page=${
        this.state.page - 1
      }&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let ParseData = await data.json();

      this.setState({
        articles: ParseData.articles,
        page: this.state.page - 1,
      });
  };
  handleNextPage = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apikey=90be9be749804afa89ebc311ca171d28&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let ParseData = await data.json();

      this.setState({
        articles: ParseData.articles,
        page: this.state.page + 1,
      });
    }
  };
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsRunner - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  tittle={element.title}
                  description={element.description}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevPage}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
            className="btn btn-dark"
            onClick={this.handleNextPage}
          >
            {" "}
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
