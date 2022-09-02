import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

class WeatherDay extends React.Component {
  // console.log(this.props.weather)

  render() {
    return (
      <div
        className="moveCard"
        style={{
          borderStyle: "solid",
          borderWidth: "1px",
          maxWidth: "1000px",
          borderRadius: "10%",
          background: "rgb(221, 199, 167)",
        }}
      >
        <Col>
          <Card style={{ width: "18rem", background: "blanchedalmond" }}>
            <Card.Body>
              <Card.Text>
                <h5>datatime = {this.props.datatime}</h5>
                <h5>description = {this.props.description} </h5>
                <h5>high_temp={this.props.high_temp}</h5>
                <h5>low_temp:{this.props.low_temp}</h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
  }
}

export default WeatherDay;
