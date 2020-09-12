import React from 'react';
// import logo from 'C:/Users/User/Desktop/Ecommerce/src/Logo.png';
import {Card, Button} from 'react-bootstrap';

class Carde extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render(){
  return (<Card style={{ width: '250px', float:"left", margin:"1%"  }}><button style={{border:"none", background:"none"}}>
  <Card.Img style={{ height: '200px'}} variant="top" src={this.props.img} thumbnail />


  <Card.Body>
  <Card.Title id="cardTitle">{this.props.title}</Card.Title>
  <Card.Text id="cardDetails">
    {this.props.description}
  </Card.Text>
  {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
  </button>
  </Card>);
  }
}

  export default Carde;
