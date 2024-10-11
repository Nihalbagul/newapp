import React, { Component } from "react";

export class Newsitems extends Component {
  
  render() {
    let {title,discription,imageUrl,Url} = this.props
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src={!imageUrl?"https://th.bing.com/th/id/OIP.26otBK2S93UXD5aPwa7RogAAAA?rs=1&pid=ImgDetMain":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {discription}
            </p>
            <a href={Url} className="btn btn-sn btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitems;
