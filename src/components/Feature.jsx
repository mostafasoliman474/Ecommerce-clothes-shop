import React from 'react'
import styled from 'styled-components'
import { Mobile } from '../Responsive'
const Container=styled.div`
    border: 1px solid #E3E6f3;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    width: 180px;
    padding: 25px 15px;
    background-color: #ffffff;
    border-radius: 3px;
    margin: 10px;
    box-shadow: 0px 0px 50px rgba(0,0,0,0.08);
    
    &:hover{
        box-shadow: 10px 20px 10px rgba(0,0,0,0.08);
    }
    ${Mobile({
      width:"300px",
      height:"300px"
    })}
`
const Image=styled.img`
  margin-bottom: 10px;
`
const Button=styled.div`
    background-color: ${props=>props.color};
    padding: 5px 10px;
    border-radius: 5px;
    color: teal;
    font-weight: 500;
    cursor: pointer;
`
export const Feature = ({item}) => {
  return (
    <Container>
        <Image src={item.source} key={item.id}/>
        <Button color={item.buttonColor}>{item.description}</Button>
    </Container>
  )
}
