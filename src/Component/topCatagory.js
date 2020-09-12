import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';



class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
 render() {
  return (<Container style={{marginTop:"5%", backgroundColor:"white"}}>
  <h4>Top Catagory</h4>
  <Row>
    <Col ><button id="catagoryBoxes" style={{border:"none"}}><h3 id="catagoryText">Electronics </h3></button></Col>
    <Col id="catagoryBoxes"><h3 id="catagoryText">Smart Phone </h3></Col>
    <Col id="catagoryBoxes"><h3 id="catagoryText">Sports </h3></Col>
    <Col id="catagoryBoxes"><h3 id="catagoryText">Ar/Vr </h3></Col>
  </Row>
  <Row>
    <Col id="catagoryBoxes"><h3 id="catagoryText">Electronics </h3></Col>
    <Col id="catagoryBoxes"><h3 id="catagoryText">Smart Phone </h3></Col>
    <Col id="catagoryBoxes"><h3 id="catagoryText">Sports </h3></Col>
    <Col id="catagoryBoxes"><h3 id="catagoryText">Ar/Vr </h3></Col>
  </Row>
</Container>);
}
}
export default App;
