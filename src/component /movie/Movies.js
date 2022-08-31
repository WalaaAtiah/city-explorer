import React from "react";
import Row from 'react-bootstrap/Row';
import "./movie.css";
import Movie from "./Movie";

class Movies extends React.Component {
  render() {
    return (
      <div >
        <h3 className="h3movie" style={{ color: "blueviolet" }}> movies:</h3>
        <Row xs={1} md={4} className="g-4">
          
          {this.props.movie.map((item) => {
            return (
              <Movie image_url={item.image_url} title={item.title} overview={item.overview} vote_average={item.vote_average} popularity={item.popularity} released_on= {item.released_on} />

                 );
          })}
        </Row>
      </div>
    );
  }
}

export default Movies;
