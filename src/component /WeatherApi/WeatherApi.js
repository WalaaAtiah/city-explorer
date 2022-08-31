import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class WeatherApi extends React.Component {

  // console.log(this.props.weather)

  render() {
    return (
      <div >
        <h3 style={{color:"blueviolet" ,margin:'15px'}}>weather:</h3>
 
        <Row xs={1} md={5} className="g-4">
          
          {this.props.weather.map((item) => {
            return (
              <div
              className="moveCard"
                style={{
                  borderStyle: "solid",
                  borderWidth: "1px",
                  maxWidth: "1000px",
                  borderRadius:"10%",
                  background:'rgb(221, 199, 167)'
                }}
              >
                <Col>
                <Card style={{ width: "18rem",background:'blanchedalmond' }}>
    
                  <Card.Body>
                  
                    <Card.Text>
                    <h5>datatime = {item.datatime}</h5>
                    <h5>description = {item.description}</h5>
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

export default WeatherApi;
