import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./movie.css";

class Movie extends React.Component {
  render() {
    return (
      <div >
        <h3 className="h3movie" style={{ color: "blueviolet" }}> movies:</h3>
        <Row xs={1} md={4} className="g-4">
          
          {this.props.movie.map((item) => {
            return (
              <div
              className="moveCard"
                style={{
                 
                  maxWidth: "1000px",
                }}
              >
                <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    className="img"
                    variant="top"
                    src={item.image_url}
                  />
                  <Card.Body>
                    <Card.Title>title:{item.title}</Card.Title>
                    <Card.Text>
                      <p>overview = {item.overview}</p>
                      <p>vote_average = {item.vote_average}</p>
                      <p>popularity = {item.popularity}</p>
                      <p>released_on = {item.released_on}</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
                </Col>
              </div>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default Movie;
