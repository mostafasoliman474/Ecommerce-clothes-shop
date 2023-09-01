import React from 'react'
import styled from 'styled-components'
import { ProductItem } from '../Data'
import { Product } from './Product'
import { Link } from 'react-router-dom'
const Container=styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
   
    margin-bottom: 20px;
`
const HeadLine=styled.h1`
  margin-bottom: 15px;
  font-size: 50px;
`
const Title=styled.p`
  margin-bottom: 15px;
  opacity: .7;

`
const ProductContainer=styled.div`
display: flex;
width: 100%;
flex-wrap: wrap;
justify-content: center;
`
export const Products = () => {
  return (
    <Container>
        <HeadLine>Featured Products</HeadLine>
        <Title>Summer Collection New Modern Design</Title>
        <Link to='/productdetails' style={{textDecorationColor:'transparent'}}> 
          <ProductContainer>
              {ProductItem.map((item)=>(
                  <Product item={item}/>
              ))}
          </ProductContainer>
        </Link>
        
        
    </Container>
  )
}
