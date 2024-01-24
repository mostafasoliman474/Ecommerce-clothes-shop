import React from 'react'

import styled from 'styled-components';
import { Navbar } from '../components/Navbar';
import { Link, useLocation } from 'react-router-dom';
import { Mobile } from '../Responsive';
// import { useDispatch } from 'react-redux';
// import { resetCart } from '../redux/cartReducer';
const Container=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const SuccessMassage=styled.div`
  
`
const Massage=styled.div`
  font-size: 30px;
  font-weight: 800;
  ${Mobile({
    textAlign:"center"
  })}
`
const DetailsContainer=styled.div`
  text-align: center;
  display: flex;  
  flex-direction: column;
  align-items: center;
  gap: 10px;
  /* color: white; */
  
`
const Info=styled.div`
  
`
const BackHome=styled.div`
  text-decoration: none;
  padding: 10px;
  background-color: teal;
  width: 200px;
  cursor: pointer;
  border-radius: 10px;
  &:hover{
    background-color: #011717;
    
  }
`
const Success = () => {
  // const dispatch=useDispatch();
  const location=useLocation();
  const res=location.state;
  const data=res.data;
  const {amount,billing_details}=data;
  // const {amount,billing_details}=data;
  console.log(data)
  // useEffect(()=>{
  //   const handelReset=()=>{
  //     dispatch(resetCart)
  //   }
  //   handelReset()
  // },[location,dispatch])
  return (
    <>
    <Navbar/>
    <Container>
      
      <SuccessMassage>
        <Massage>Your process run successfully</Massage>
        <DetailsContainer>
          <Info>{billing_details.name}</Info>
          <Info>{billing_details.address.city+','+billing_details.address.country}</Info>
          <Info>{amount/200}$</Info>
          <BackHome>

          <Link to='/' style={{color:'white',fontWeight:'800',textDecoration:'none '}}>Back Home</Link>
          </BackHome>
        </DetailsContainer>
      </SuccessMassage>
    </Container>
    </>
  )
}

export default Success