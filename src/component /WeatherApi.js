import React from "react";
import axios from "axios";

class WeatherApi extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      weather:NaN,
      error: "",
      flage: false,
    };
  }

  getWeatherInfo = (event) => {
    ////http://localhost:3000/getWeather?lat=lat&lon=lon&name=cityName
    console.log("inside event");
    const URL = `${process.env.REACT_APP_URL}getWeather?lat=${this.props.lat}&lon=${this.props.lon}&name=${this.props.cityName}`;

    axios
      .get(URL)
      .then((result) => {
        console.log(result.data);
        //do the things that dependent on the axios result
        this.setState({
          weather: result.data,
          flage: true,
        });
      })

      .catch((error) => {
        this.setState({
          error: "Erorr :sorry something went wrong! ",
          flage: false,
        });
      });
  };

  render() {
    return (
      <div show={this.props.mapFlag}>
        <h3 style={{color:"blueviolet"}} onClick={this.getWeatherInfo}>click here to see the weather</h3>

        {this.state.flage&&this.state.weather.map((item) => {
          return (
            <div style={{borderStyle:"solid",borderWidth:"1px",maxWidth:'500px'}}>
              <h3>datatime = {item.datatime}</h3>
              <h3>description = {item.description}</h3>
            </div>
          );
        })}
      </div>
    );
  }
}

export default WeatherApi;
