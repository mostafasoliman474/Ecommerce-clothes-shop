import React from 'react'
import styled from 'styled-components'
import backgroundImg from '../asetess/banner/b2.jpg'
import { Mobile } from '../Responsive'
const Container=styled.div`
    height: 40vh;
    width: 100%;
    background-image:url(${backgroundImg} );
   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`
const Title=styled.p`
    color :white;
    font-weight: 600;
    margin-bottom: 10px;
`
const Desc=styled.h1`
    color:white;
    margin-bottom: 20px;
    text-align:center;
    ${Mobile({
      fontSize:'18px'
    })}
`
const Button=styled.button`
  padding: 10px 20px;
  font-weight: 600;
  cursor: pointer;
  &:hover{
    background-color: teal;
    color:white;
    border: none;
  }
`
const Line=styled.span`
  color: #ec1212;
`
export const Offer = () => {
  return (
    <Container>
        
        <Title>Repair Services</Title>
        <Desc>Up to <Line>70% Off-All</Line> t-shirts & Accessories</Desc>
        <Button>Explore More</Button>
    </Container>
  )
}
