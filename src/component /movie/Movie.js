import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

import "./movie.css";

class Movie extends React.Component {
  render() {
    return (
      <div>
        <div
          className="moveCard"
          style={{
            maxWidth: "1000px",
          }}
        >
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img className="img" variant="top" src={this.props.image_url} />
              <Card.Body>
                <Card.Title>title:{this.props.title}</Card.Title>
                <Card.Text>
                  <p>overview = {this.props.overview}</p>
                  <p>vote_average = {this.props.vote_average}</p>
                  <p>popularity = {this.props.popularity}</p>
                  <p>released_on = {this.props.released_on}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </div>
      </div>
    );
  }
}

export default Movie;
