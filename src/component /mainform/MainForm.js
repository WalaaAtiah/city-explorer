import axios from "axios";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Ratio from "react-bootstrap/Ratio";
import WeatherApi from "../WeatherApi/WeatherApi";
import Movies from "../movie/Movies";
import "./mainform.css";
import Card from "react-bootstrap/Card";

class MainForm extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      display_name: "",
      lat: "",
      lon: "",
      error: "",
      mapFlag: false,
      cityName: "",
      weatherflage: false,
      flagemovie: false,
      weather: [],
      movie: [],
    };
  }

  getLocationData = async (event) => {
    console.log("location event");

    event.preventDefault();
    const cityName = event.target.city.value;
    let key = "pk.077247f95cde8629b7a4cfddc15f087c";
    let URL = `https://us1.locationiq.com/v1/search?key=${key}&q=${cityName}&format=json`;

    try {
      let result = await axios.get(URL);
      let data = result.data[0];
      console.log("axios event");
      this.getWeatherInfo(data.lat, data.lon, event.target.city.value);
      this.getMovieInfo(event.target.city.value);
      this.setState({
        display_name: data.display_name,
        lat: data.lat,
        lon: data.lon,
        mapFlag: true,
        error: "",
        cityName: event.target.city.value,
      });
      console.log(event.target.city.value);
    } catch {
      this.setState({
        error: "Erorr :sorry something went wrong! ",
        mapFlag: false,
      });
    }
  };
  getWeatherInfo = async (lat, lon, cityName) => {
    ////http://localhost:3000/getWeather?lat=lat&lon=lon&name=cityName
    console.log("inside weather info");
    console.log(lat, lon, cityName);
    console.log(this.state.weather);

    const URL = `${process.env.REACT_APP_URL}getWeather?lat=${lat}&lon=${lon}&name=${cityName}`;

    try {
      let result = await axios.get(URL);
      console.log(result.data);
      //do the things that dependent on the axios result
      this.setState({
        weather: result.data,
        weatherflage: true,
      });
      console.log("line73", this.state.weather);
    } catch {
      this.setState({
        error: "Erorr :sorry something went wrong in weather! ",
        weatherflage: false,
      });
    }
  };

  getMovieInfo = async (cityName) => {
    ////http://localhost:3000/movies?query=cityName
    console.log("inside movie info");
    console.log(cityName);
    console.log(this.state.movie);
    const URL = `${process.env.REACT_APP_URL}movies?query=${cityName}`;
    try {
      let result = await axios.get(URL);

      console.log(result.data);
      // do the things that dependent on the axios result
      this.setState({
        movie: result.data,
        flagemovie: true,
      });
    } catch {
      this.setState({
        error: "Erorr :sorry something went wrong from movie! ",
        flagemovie: false,
      });
    }
  };

  render() {
    return (
      <>
        <div className="form">
          <Card
            style={{
              width: "50rem",
              backgroundColor: "rgba(254, 240, 220, 0.825)",
              borderStyle: "solid",
              borderWidth: "2px",
              boxShadow: " 3px 3px 5px 6px rgba(0, 0, 0, 0.825) ",
            }}
          >
            <Card.Body>
              <Card.Text>
                <div style={{ margin: "50px", alignItems: "center" }}>
                  <Form
                    onSubmit={this.getLocationData}
                    style={{
                      backgroundColor: "rgb(178, 235, 235)",
                      textAlign: "center",
                      width: "500px",
                      borderRadius: "15%",
                      borderStyle: "solid",
                      borderWidth: "1px",
                    }}
                  >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>
                        <h2>search</h2>{" "}
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="search"
                        name="city"
                      />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
                </div>
                <div className="data">
                  <h4> Location Name : {this.state.display_name} </h4>
                  <br></br>
                  <h4>LATITUDE :{this.state.lat} </h4>
                  <br></br>
                  <h4>LONGITUDE :{this.state.lon} </h4>
                  <h3 style={{ color: "red" }}>{this.state.error}</h3>
                  {/* {this.state.mapFlag && <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.7aedc85ff3620b0d3b6865ccab5efd25&center=${this.state.lat},${this.state.lon}`}></img>} */}

                  {this.state.mapFlag && (
                    <div style={{ width: 660, height: "auto" }}>
                      <Ratio aspectRatio="16x9">
                        <embed
                          type="image/svg+xml"
                          src={`https://maps.locationiq.com/v3/staticmap?key=pk.7aedc85ff3620b0d3b6865ccab5efd25&center=${this.state.lat},${this.state.lon}`}
                        />
                      </Ratio>
                    </div>
                  )}
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="movie">
          {this.state.weatherflage && this.state.mapFlag && (
            <WeatherApi weather={this.state.weather} />
          )}

          {this.state.flagemovie && this.state.mapFlag && (
            <Movies movie={this.state.movie} />
          )}
        </div>
      </>
    );
  }
}

export default MainForm;
