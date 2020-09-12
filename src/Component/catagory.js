import React from 'react';
// import logo from 'C:/Users/User/Desktop/Ecommerce/src/Logo.png';
import {Container,Row,Col, ListGroup, Carousel} from 'react-bootstrap';
import { Link } from 'react-router-dom';


class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
    <Container fluid style={{ backgroundColor:"white"}}>
<Row>

<Col xs={2}>
<Link to="/catagory">
<ListGroup style={{color:"black"}}>

<ListGroup.Item>Cras justo odio</ListGroup.Item>
<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
<ListGroup.Item>Morbi leo risus</ListGroup.Item>
<ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup>
</Link>
</Col>

<Col xs={8}>
<Carousel>
<Carousel.Item>
<img
className="d-block w-100"
src="https://img.alicdn.com/tfs/TB1acpncZVl614jSZKPXXaGjpXa-990-400.jpg"
alt="First slide"
/>
<Carousel.Caption>

</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
  className="d-block w-100"
src="https://img.alicdn.com/tfs/TB1CJGIe2zO3e4jSZFxXXaP_FXa-990-400.png"
alt="Third slide"
/>

<Carousel.Caption>

</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100"
src="https://s.alicdn.com/@img/tfs/TB1kWLLPkL0gK0jSZFAXXcA9pXa-990-400.jpg"
alt="Third slide"
/>

<Carousel.Caption>

</Carousel.Caption>
</Carousel.Item>
</Carousel>
</Col>
<Col xs={2}>
</Col>
</Row>
</Container>);
}
}

export default App;
