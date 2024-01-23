import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import { NewArrivalItems } from '../Data'

import { Product } from './Product'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'
const Container = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  margin: 40px 0;
`
const HeadLine = styled.h1`
  margin-bottom: 10px;
  font-size: 50px;
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
export const NewArrival = () => {
  const { currentUser } = useSelector(state => state.user)
  const [myProduct, setProduct] = useState([])
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("https://backendserver-xw5l.onrender.com/api/product?category=new-arrival");
        setProduct(res.data)

      } catch (error) {
        console.log(error)
      }
    }
    getData();
  },
    [currentUser])
  return (
    <Container>
      <HeadLine>New Arrival</HeadLine>
      <Title>Summer Collection New Modern Design</Title>
      <Link to='/productdetails' style={{ textDecorationColor: 'transparent' }}>
        <ProductContainer>
          {myProduct.map((item) => (
            <Product item={item} key={item.id} />
          ))}
        </ProductContainer>
      </Link>
    </Container>
  )
}
