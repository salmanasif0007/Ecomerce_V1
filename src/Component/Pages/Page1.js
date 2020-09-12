import React from 'react';
import Catagory from '../catagory';
import logo from 'C:/Users/User/Desktop/Ecommerce/src/Logo.png';
import Carde from '../card';
import TopCatagory from '../topCatagory';
import TopCollection from '../topCollection';
import {Container} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import NewArrival from '../NewArrival';


export default class Page1 extends React.Component{
    // constructor(props){
    // super(props);
    // }
    render(){
        var recommendedProduct =[];
        for(var i=0;i<this.props.all[0].recomended.length;i++){
            recommendedProduct.push(<Link to={"/product/"+this.props.all[0].recomended[i].productId}><Carde style={{fontSize:"5px"}} title={this.props.all[0].recomended[i].productName} img={this.props.all[0].recomended[i].productImg} description={this.props.all[0].recomended[i].productDetails}/></Link>);
        }
    return(
        <div>


                                            {/* "First Catagory" */}


            <Catagory style={{marginTop:"120px"}}/>


                                            {/* "Top Collection" */}


            <TopCollection data={this.props.all[0].topCollection} name="Top Collection" />


                                            {/* "Top Catagory" */}


            <TopCatagory/>


                                            {/* "New Arrival" */}


            <NewArrival name="New Arrival"/>


            <Container fluid style={{backgroundColor:"white", height:"200px", marginBottom:"20px"}}>
                <img src={logo}  style={{marginLeft:"42%", marginTop:"30px", height:'140px'}} alt=""/>
            </Container>
            <Container>


                                            {/* recommendedProduct */}


                {recommendedProduct}



            </Container>
            <Container fluid style={{height:"60px", color:"black", backgroundColor:"black",marginTop:"75%"}}>
                <h5 style={{color:"white", marginLeft:"40%"}}>Copy Right 2020 Go Justitech Corp.</h5>
            </Container>
        </div>
    )}
}








            // console.log( this.state.data.dbData[0].Catagory[2])
         // console.log(this.state.data[0].Catagory[2]);
         // console.log(this.props.all[0].topCollection[2]);

        
  //   function Page1(props){
  //   console.log(  )
  //   return (
  //     <div>
  //       <Catagory/>
  //     <TopCollection name="Top Collection"/>
  //     <TopCatagory/>
  //
  //     <TopCollection name="New Arrival"/>
  //     <Container fluid style={{backgroundColor:"white", height:"200px", marginBottom:"20px"}}>
  //       <img src={logo} style={{marginLeft:"42%", marginTop:"30px", height:'140px'}}/>
  //     </Container>
  //     <Container>
  //
  //       <Carde title="Racket" img="https://sc01.alicdn.com/kf/Hcd501cd9d55748dbb342eca66b83c4a1q.png" description="This a badminton racket made in Kushtia. Though it looks like a Camera it is not. Its a badminton Racket"/>
  //       <Carde title="Racket" img="https://sc01.alicdn.com/kf/Hcd501cd9d55748dbb342eca66b83c4a1q.png" description="This a badminton racket made in Kushtia. Though it looks like a Camera it is not. Its a badminton Racket"/>
  //       <Carde title="Racket" img="https://sc01.alicdn.com/kf/Hcd501cd9d55748dbb342eca66b83c4a1q.png" description="This a badminton racket made in Kushtia. Though it looks like a Camera it is not. Its a badminton Racket"/>
  //       <Carde title="Racket" img="https://sc01.alicdn.com/kf/Hcd501cd9d55748dbb342eca66b83c4a1q.png" description="This a badminton racket made in Kushtia. Though it looks like a Camera it is not. Its a badminton Racket"/>
  //       <Carde title="Racket" img="https://sc01.alicdn.com/kf/Hcd501cd9d55748dbb342eca66b83c4a1q.png" description="This a badminton racket made in Kushtia. Though it looks like a Camera it is not. Its a badminton Racket"/>
  //       <Carde title="Racket" img="https://sc01.alicdn.com/kf/Hcd501cd9d55748dbb342eca66b83c4a1q.png" description="This a badminton racket made in Kushtia. Though it looks like a Camera it is not. Its a badminton Racket"/>
  //       <Carde title="Racket" img="https://sc01.alicdn.com/kf/Hcd501cd9d55748dbb342eca66b83c4a1q.png" description="This a badminton racket made in Kushtia. Though it looks like a Camera it is not. Its a badminton Racket"/>
  //
  //     </Container>
  //     <Container fluid style={{height:"60px", color:"black", backgroundColor:"black",marginTop:"75%"}}>
  //       <h5 style={{color:"white", marginLeft:"40%"}}>Copy Right 2020 Go Justitech Corp.</h5>
  //     </Container>
  //     </div>
  //   )
  // }