import React, { Component } from "react";
import Newsitems from "./Newsitems";

export class News extends Component {
  constructor() {
    super();
    console.log("Hello i am constructor from New component");
    this.state = {
      articles: [],
      page: 1,
    };
  }

  async componentDidMount() {
    console.log("cdm");
    let url =
      `https://newsapi.org/v2/everything?q=apple&from=2023-12-11&to=2023-12-11&sortBy=popularity&apiKey=d028cc52ba45452ab69b4ade780e8914&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(data);
    this.setState({
      articles: parseddata.articles,
      totalArticles: parseddata.totalResults,
    });
  }
  handlePreviousClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/everything?q=apple&from=2023-12-11&to=2023-12-11&sortBy=popularity&apiKey=d028cc52ba45452ab69b4ade780e8914&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(data);

    this.setState({
      page: this.state.page - 1,
      articles: parseddata.articles,
    });
  };
  handleNextClick = async () => {
    console.log("Next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults /this.props.pageSize )) {
    } else {
      let url = `https://newsapi.org/v2/everything?q=apple&from=2023-12-11&to=2023-12-11&sortBy=popularity&apiKey=d028cc52ba45452ab69b4ade780e8914&page=${
        this.state.page + 1
      }&pageSize=$${this.props.pageSize}`;
      let data = await fetch(url);
      let parseddata = await data.json();
      console.log(data);

      this.setState({
        page: this.state.page + 1,
        articles: parseddata.articles,
      });
    }
  };
  render() {
    return (
      <div className="container my-3">
        <h2>Monkey Newz - Top Headlines</h2>
       
        <div className="row ">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitems
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  Url={element.url}
                />
              </div>
            );
          })}
        </div>

        <div className="container d-flex justify-content-center">
          <button
            disabled={this.state.page <= 1}
            type="button"
            class="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            &larr;Previous
          </button>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
            type="button"
            class="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
