import React from "react";

import Footer from "./component /footer/Footer";
import Header from "./component /header/Header";
import Main from "./component /main/Main";
import './STYLE/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {
  render() {

    return (
      <div className="divapp" >
        <Header/>
        <div className="divm" >
        <Main/>
        </div>
        <Footer/>
     

      </div >
    
    );
  }
}

export default App;


