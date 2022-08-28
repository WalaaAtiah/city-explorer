import React from "react";

import Footer from "./component /Footer";
import Header from "./component /Header";
import Main from "./component /Main";
import './App.css';


class App extends React.Component {
  render() {

    return (
      <div style={{margin:"20px"}}>
        <Header/>
        <div style={{ }}>
        <Main/>
        </div>
        <Footer/>
     

      </div >
    
    );
  }
}

export default App;


