import React from "react";
import axios from "axios";

class Movie extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      movie: NaN,
      error: "",
      flage: false,
    };
  }

  getMovieInfo = (event) => {
    ////http://localhost:3000/movies?query=cityName
    console.log("inside event");
    const URL = `${process.env.REACT_APP_URL}movies?query=${this.props.cityName}`;

    axios
      .get(URL)
      .then((result) => {
        console.log(result.data);
        // do the things that dependent on the axios result
        this.setState({
          movie: result.data,
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
        <h3 style={{color:"blueviolet"}} onClick={this.getMovieInfo}>click here to see the movies</h3>

        {this.state.movie &&
          this.state.movie.map((item) => {
            return (
              <div style={{borderStyle:"solid",borderWidth:"1px" ,maxWidth:'1000px'}}>
                <p>title = {item.title}</p>
                <p>overview = {item.overview}</p>
                <p>vote_average = {item.vote_average}</p>
                <p>total_votes = {item.total_votes}</p>
                <p>image_url = {item.image_url}</p>
                <p>popularity = {item.popularity}</p>
                <p>released_on = {item.released_on}</p>
              </div>
            );
          })}
      </div>
    );
  }
}

export default Movie;
