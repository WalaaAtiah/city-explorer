import axios from "axios";
import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Ratio from 'react-bootstrap/Ratio';
import Weather from "./Weather";



class MainForm extends React.Component {

  constructor(prop){
    super(prop);
    this.state={
      display_name:'',
      lat:'',
      lon:'',
      error:'',
      mapFlag:'',
      cityName:''
      

    }
  }

  getLocationData =async (event) =>{
    event.preventDefault();
    const cityName=event.target.city.value;
    let key="pk.077247f95cde8629b7a4cfddc15f087c"
    let URL=`https://us1.locationiq.com/v1/search?key=${key}&q=${cityName}&format=json`;




   try{
    let result =await axios.get(URL);
    let data=result.data[0];
    

    // console.log(data.lon)
    // console.log(data.lat)
    // console.log(data.display_name)
    // console.log(data)


    this.setState({
      display_name:data.display_name,
      lat:data.lat,
      lon:data.lon,
      mapFlag:true,
      error:'' ,
      cityName:event.target.city.value


    })
        console.log(this.state.cityName)



   }
   catch{
    this.setState({
      error:'Erorr :sorry something went wrong! ' ,
      mapFlag:false
    })

   }

    
  
    


  }

  render() {

    return (
      <>
     
      <div style={{ margin:"50px" , alignItems:"center"}}>
      <Form onSubmit={this.getLocationData } style={{backgroundColor: "rgb(178, 235, 235)", textAlign: "center" ,width:'500px' ,borderRadius:"15%" , borderStyle:"solid",borderWidth:'1px'}} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><h2>search</h2> </Form.Label>
        <Form.Control type="text" placeholder="search" name="city" />
        
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    
      </div>
      <div>
        <h4> Location Name : {this.state.display_name} </h4>
        <br></br>
        <h4>LATITUDE :{this.state.lat} </h4>
        <br></br>
        <h4>LONGITUDE :{this.state.lon} </h4>
        <h3 style={{color:'red'}}>{this.state.error}</h3>
        {/* {this.state.mapFlag && <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.7aedc85ff3620b0d3b6865ccab5efd25&center=${this.state.lat},${this.state.lon}`}></img>} */}

        {this.state.mapFlag && <div style={{ width: 660, height: 'auto' }}>
      <Ratio aspectRatio="16x9">
        <embed type="image/svg+xml" src={`https://maps.locationiq.com/v3/staticmap?key=pk.7aedc85ff3620b0d3b6865ccab5efd25&center=${this.state.lat},${this.state.lon}`} />
      </Ratio>
    </div> }

     
      </div>

      {this.state.mapFlag &&<Weather  lat={this.state.lat} lon={this.state.lon} mapFlag={this.state.mapFlag} cityName={this.state.cityName} />}
      </>
    );
  }
}

export default MainForm;

