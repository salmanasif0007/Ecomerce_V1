import React,{useState,useEffect} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import firebase from "../firestore";


function useData(){
  const[All,setData]= useState([])
  useEffect(()=>{
    firebase
      .firestore()
      .collection("data")
      .onSnapshot((snapshot)=>{
        const newDatas= snapshot.docs.map((doc)=>({
          id:doc.id,
          ...doc.data()
        }))
        setData(newDatas)
      })
  },[])

  if(All.length !==0){
    return All;
  }



}


const NewArrival =()=>{
    var arr=[]
    const data =useData();
    if(data !== undefined){
        arr.push(  data[0].NewArrival.map((data)=>
            <Row key={data.productId} id="cover-item"><img height="100%" width="100%" src={data.productImg} alt=""/></Row>
        ))
    }
    return (
<Container fluid style={{background: "white", marginTop:"40px", paddingTop:"10px"}}>

    <Col id="cover-container">

        {arr}

    </Col>
</Container>);
}


export default NewArrival;
