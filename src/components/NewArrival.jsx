import React from 'react'
import styled from 'styled-components'
import { NewArrivalItems } from '../Data'

import { Product } from './Product'
const Container=styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    margin: 40px 0;
`
const HeadLine=styled.h1`
  margin-bottom: 10px;
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
export const NewArrival = () => {
  return (
    <Container>
        <HeadLine>New Arrival</HeadLine>
        <Title>Summer Collection New Modern Design</Title>
        <ProductContainer>
            {NewArrivalItems.map((item)=>(
                <Product item={item}/>
            ))}
        </ProductContainer>
        
    </Container>
  )
}
