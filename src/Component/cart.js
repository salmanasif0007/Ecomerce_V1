import React from 'react';
import firebase from "../firestore";

import {Container,Row,Col, Button} from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {quantity:this.props.cart.quantity+1 , };
  }

  

  up() {
    this.setState({quantity: this.state.quantity + 1});

    var subtotal=(this.props.cart.price * this.state.quantity)
    const cartRef = firebase.database().ref('cart').child(this.props.cart.id);
    cartRef.update({
      quantity:this.state.quantity,
      total:subtotal,
    });
  }
  down() {
    if(this.state.quantity > 1){
      this.setState({quantity: this.state.quantity - 1});
      var subtotal=(this.props.cart.price * this.state.quantity)
      const cartRef = firebase.database().ref('cart').child(this.props.cart.id);
      cartRef.update({
        quantity:this.state.quantity,
        total:subtotal,
      });
    }
    else if (this.state.quantity === 1){
      console.log("Delete");
      const cartRef = firebase.database().ref('cart').child(this.props.cart.id);
        cartRef.remove();
    }
    

    
  }
  render(){
    console.log(this.props.cart.id)
    
  return(
    <Container style={{marginTop:"100px"}}>
      <Row xs={9} style={{height:"180px", backgroundColor:"White"}}>
        <Col xs={3} > <img src={this.props.cart.img} height="100%" width="100%" alt=""/>  </Col>
        <Col xs={1}></Col>
        <Col style={{marginTop:"50px"}}><Row><h6>{this.props.cart.name}</h6></Row><Row><h6>{this.props.cart.price}/=</h6></Row> </Col>
        <Col xs={1}></Col>
        <Col>  <Row style={{marginTop:"45px"}}><Button onClick={() => this.up()} /></Row><Row>{this.props.cart.quantity}</Row><Row><Button onClick={() => this.down()}/></Row>  </Col>
        <Col xs={1}></Col>
        <Col > <h3 style={{marginTop:"45px"}}>{this.props.cart.total}/=</h3> </Col>
      </Row>
      </Container>
    )
  }
}

  export default App;





  
  // export default function Cart() {
  //     const [cartList, setCartList] = useState();
  //     useEffect(() => {
  //     const cartRef = firebase.database().ref('cart');
  //     cartRef.on('value', (snapshot) => {
  //         const carts = snapshot.val();
  //         const cartList = [];
  //         for (let id in carts) {
  //           cartList.push({ id, ...carts[id] });
  //         }
  //         setCartList(cartList);
          
  //     });
  //     }, []);
      
  //     return (
          
  //         <div>
  //     <Container  id="box" fluid>
  //             {cartList
  //             ? cartList.map((cart) =>
  //               <Container  key={cart.id} style={{marginTop:"100px"}}>
  //                 <Row xs={9} style={{height:"180px", backgroundColor:"White"}}>
  //                   <Col xs={3} > <img src={cart.img} height="100%" width="100%" alt=""/> </Col>
  //                   <Col xs={1}></Col>
  //             <Col style={{marginTop:"50px"}}><Row><h6>{cart.name}</h6></Row><Row><h6>{cart.price}/=</h6></Row> </Col>
  //                   <Col xs={1}></Col>
  //                   <Col>  <Row style={{marginTop:"45px"}}><Button/></Row><Row>4</Row><Row><Button/></Row>  </Col>
  //                   <Col xs={1}></Col>
  //                     <Col > <h3 style={{marginTop:"45px"}}>{cart.price}/=</h3> </Col>
  //                 </Row>
  //               </Container>
  //             )
  //             : (<div style={{fontSize:'35px',color:"black",textAlign:"center",margin:'5% 35%'}} >
                  
  //                     Waiting For Cart....
                  
                
  //             </div>)}
              
  //     </Container>
  //     </div>
  //     );
  // }
  
  
  
  
  
  