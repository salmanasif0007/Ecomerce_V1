import React from 'react';
import logo from 'C:/Users/User/Desktop/Ecommerce/src/Logo.png';
import {Container,Row,Col, Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render(){
  return (<Container  fluid style={{ backgroundColor:"white", paddingTop:"18px",paddingBottom:"38px"}}>

  <Row>
    <Col><button style={{ background:"none", border:"none"}}><Link to="/" ><img src={logo} height="35px" alt=""/></Link></button></Col>
    <Col xs={5} >
        <Form>
        <Row>
        <Col xs={9}>

          <Form.Control type="text" placeholder="Search" style={{backgroundColor: "rgba(255,255,255,1)",
            borderRadius: "49px",
            borderWidth: "3px",
            borderColor: "#FF5E00",
            borderStyle: "solid",

            width: "100%",
            // borderRadius: "21px 0px 0px 21px",
            height: "36px"}} />
      </Col>


      <Col xs={3}>

        <Button variant="primary" type="submit" style={{
          position: "relative",
          width: "112px",
          height: "36px",
          marginLeft:"-30px",

          borderColor: "#FF5E00",
          borderStyle: "solid",

          background: "#FF5E00",


          borderRadius: "0px 21px 21px 0px"}}>
        <i class="fas fa-search"></i>
        </Button>
        </Col>
          </Row>
      </Form>
    </Col>


    <Col>
      <button style={{color:"#FF5E00", fontSize:"30px", marginLeft:"50%", background:"none", border:"none"}} class="fas fa-user"></button>
      <Link to='/cart'><button style={{color:"#FF5E00", fontSize:"30px", marginLeft:"10%",  background:"none", border:"none"}} class="fas fa-shopping-cart"></button></Link>
    </Col>
  </Row>

  </Container>);
 }
}


export default App;
