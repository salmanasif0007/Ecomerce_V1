import React from 'react';
import Catagory from './Component/catagory';
import Carde from './Component/card';
import TopCatagory from './Component/topCatagory';
import TopCollection from './Component/topCollection';
import Product from './Component/product';
import {Container,Row,Col, ListGroup, Carousel,Card, Button} from 'react-bootstrap';



class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
  return(<Catagory/>
<TopCollection/>
<TopCatagory/>
<h4>New Arrival</h4>
<TopCollection/>
<Container fluid style={{backgroundColor:"white", height:"200px", marginBottom:"20px"}}>
  <img src={logo} style={{marginLeft:"42%", marginTop:"30px", height:'140px'}}/>
</Container>
<Container>

  <Carde/>
  <Carde/>
  <Carde/>
  <Carde/>
  <Carde/>
  <Carde/>
  <Carde/>

</Container>
<Container fluid style={{height:"60px", color:"black", backgroundColor:"black",marginTop:"75%"}}>
  <h5 style={{color:"white", marginLeft:"40%"}}>Copy Right 2020 Go Justitech Corp.</h5>
</Container>
  )
 }
}
export default App
