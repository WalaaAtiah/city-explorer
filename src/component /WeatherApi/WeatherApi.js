import React from "react";
import Row from 'react-bootstrap/Row';
import WeatherDay from "./WeatherDay";

class WeatherApi extends React.Component {

  // console.log(this.props.weather)

  render() {
    return (
      <div >
        <h3 style={{color:"blueviolet" ,margin:'15px'}}>weather:</h3>
 
        <Row xs={1} md={5} className="g-4">
          
          {this.props.weather.map((item) => {
            return (
              <WeatherDay datatime={item.datatime}  description={item.description}/>
              
            );
          })}
        </Row>
      </div>
    );
  }
}

export default WeatherApi;
