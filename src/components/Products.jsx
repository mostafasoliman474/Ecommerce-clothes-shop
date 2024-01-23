import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import { ProductItem } from '../Data'
import { Product } from './Product'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'
const Container = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  margin-bottom: 20px;
`
const HeadLine = styled.h1`
  margin-bottom: 15px;
  font-size: 50px;
  text-align: center;
`
const Title = styled.p`
  margin-bottom: 15px;
  opacity: .7;
`
const ProductContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`
export const Products = () => {
  // const [filteredProduct, setFilteredProduct] = useState([])
  const {currentUser}=useSelector(state=>state.user)
  const [myProduct, setProduct] = useState([])


  useEffect(()=>{
    const getData=async()=>{
      try {
        const res=await axios.get("https://backendserver-xw5l.onrender.com/api/product?category=featured-product");
        setProduct(res.data)
        
      } catch (error) {
        console.log(error)
      }
    }
    getData();
  },
  [currentUser])
  // useEffect(
  //   ()=>{
  //     setFilteredProduct(
  //       myProduct.filter(item=>(
  //         Object.entries({type:''}).every(([key, value]) =>
  //           item[key].includes(value)
  //         )
  //       ))
  //     )
  //   },[myProduct,currentUser]
  // )
  // console.log(myProduct,'all product')
  // console.log(filteredProduct,'filteredproduct')
  return (
    <Container>
      <HeadLine>Featured Products</HeadLine>
      <Title>Summer Collection New Modern Design</Title>
      {/* <Link to='/productdetails' style={{ textDecorationColor: 'transparent' }}> */}
        <ProductContainer>
          {myProduct.map((item) => (
            <Product item={item} key={item.id} />
          ))}
        </ProductContainer>
      {/* </Link> */}
    </Container>
  )
}
