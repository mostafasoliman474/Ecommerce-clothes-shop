import React from 'react'

import styled from 'styled-components';
import { Navbar } from '../components/Navbar';
import { useLocation } from 'react-router-dom';
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
`
const Success = () => {
  // const dispatch=useDispatch();
  const location=useLocation();
  const data=location.state;
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
      </SuccessMassage>
    </Container>
    </>
  )
}

export default Success