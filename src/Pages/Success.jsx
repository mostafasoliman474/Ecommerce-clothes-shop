import React, { useEffect } from 'react'

import styled from 'styled-components';
import { Navbar } from '../components/Navbar';
import { Link, useLocation } from 'react-router-dom';
import { Mobile } from '../Responsive';
import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { resetCart } from '../redux/cartReducer';
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const SuccessMassage = styled.div`
  
`
const Massage = styled.div`
  font-size: 30px;
  font-weight: 800;
  ${Mobile({
  textAlign: "center"
})}
`
const DetailsContainer = styled.div`
  text-align: center;
  display: flex;  
  flex-direction: column;
  align-items: center;
  gap: 10px;
  /* color: white; */
  
`
const Info = styled.div`
  
`
const BackHome = styled.div`
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
  const location = useLocation();
  const res = location.state;
  const { data, currentUser, products } = res;
  const { amount, billing_details } = data;
  // const {amount,billing_details}=data;
  // console.log(products)
  const userid = currentUser._id
  const productsId = products?.map(product => ({ "productId": product._id, 'quentity': parseInt(product.chooseAmount) }))
  const addressInfo = billing_details.address;
  console.log("ad", addressInfo)
  // console.log(productsId)
  // const makeOrder = {userID,productsId,amount,addressUser}
  // console.log(makeOrder)
  const token = `Bearer ${currentUser.accessToken}`
  // useEffect(()=>{
  //   const handelReset=()=>{
  //     dispatch(resetCart)
  //   }
  //   handelReset()
  // },[location,dispatch])
  console.log(
    {
      "userId": userid,
      "products": productsId,
      "amount": amount / 200,
      "adress": addressInfo
    }
  )
  useEffect(() => {
    const createOrder = async () => {
      try {
        let res = await axios.post(`${process.env.REACT_APP_BACKEND_SERVER_URL}/api/order`,
          {
            userId: userid,
            products: productsId,
            amount: amount / 200,
            address: addressInfo
          }
          , { headers: { token: token } })
        console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    createOrder()
  }, [])
  return (
    <>
      <Navbar />
      <Container>
        <SuccessMassage>
          <Massage>Your process run successfully</Massage>
          <DetailsContainer>
            <Info>{billing_details.name}</Info>
            <Info>{billing_details.address.city + ',' + billing_details.address.country}</Info>
            <Info>{amount / 200}$</Info>
            <BackHome>

              <Link to='/' style={{ color: 'white', fontWeight: '800', textDecoration: 'none ' }}>Back Home</Link>
            </BackHome>
          </DetailsContainer>
        </SuccessMassage>
      </Container>
    </>
  )
}

export default Success