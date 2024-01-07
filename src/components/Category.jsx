import React from 'react'
import styled from 'styled-components'
import { Mobile } from '../Responsive'
const Container=styled.div`
    flex:1;
    background-image:url(${props=>props.src});
    background-repeat: no-repeat;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 30px;
    background-size: cover;
    margin: 10px;
    ${Mobile({
        backgroundPosition:'bottom',
        padding:'15px',
        
    })}
    filter: brightness(.9);
    &:hover{
        filter: brightness(1);
    }
`
const Title=styled.p`
    margin-bottom: 20px;
    font-size: 22px;
    font-weight: 500;
    
`
const Offer=styled.h1`
    font-size: 50px;
    font-weight:bolder;
    margin-bottom: 20px;
    ${Mobile({
        fontSize:'32px'
    })}
`
const Button=styled.div`
    border:2px solid white;
    padding: 10px 20px;
    background-color: rgba(0,0,0,0);
    color: white;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    &:hover{
        background-color: teal;
    }
    
`
export const Category = ({item}) => {
  return (
    <Container src={item.img}>
        <Title>{item.title}</Title>
        <Offer>{item.offer}</Offer>
        <Title>{item.offer}</Title>
        <Button>{item.button}</Button>
    </Container>
  )
}
