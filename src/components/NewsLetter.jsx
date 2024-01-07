import React from 'react'
import styled from 'styled-components'
import bcImg from '../asetess/banner/b14.png'
import { Mobile } from '../Responsive'
const Container=styled.div`
    height: 30vh;
    width: 100%;
    background-image: url(${bcImg});
    background-color:#041e42;
    background-repeat: no-repeat;
    background-position: 20% 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    color: #ffffff;
    padding: 0 40px;
    margin: 20px 0;
    ${Mobile({
      flexDirection:'column',
      padding:'20px 0px'
    })}
`
const Input=styled.input`
  background-color: ${props=>props.bg==='teal'&&'teal'};
  color: ${props=>props.bg==='teal'&&'#ffffff'};
  height: 40px;
  flex: ${props=>props.bg==='white'?9:1};
  padding-left: ${props=>props.bg==='white'&&'10px'};
  cursor:${props=>props.bg==='teal'&&'pointer'} ;
  outline: none;
  padding: ${props=>props.bg==='teal'&&'10px'} ;
  border: none;
  font-weight:${props=>props.bg==='teal'&&600} ;
  border-radius: ${props=>props.bg==='white'?'5px 0 0 5px':'0 5px 5px 0;'} ;
  ${Mobile({
    width:"100%",
    
  })}
`
const DescContainer=styled.div`
  flex: 1;
`
const Title=styled.h1`
  margin-bottom: 15px;
  ${Mobile({
    fontSize:'23px',textAlign:"center"
  })}
`
const Desc=styled.p`
  opacity: .8;
  font-size: 14px;
  letter-spacing: 1px;
  ${Mobile({
    textAlign:"center"
  })}
`
const InputContainer=styled.div`
  display: flex;
  flex: .8;
  display: flex;
  align-items: start;
`
const Line=styled.span`
  color:#ffbd27;
  font-weight: 500;
`
export const NewsLetter = () => {
  return (
    <Container>
      <DescContainer>
        <Title>Sign Up For Newsletters</Title>
        <Desc>Get E-mail updates about our latest shop and <Line>special offers.</Line></Desc>
      </DescContainer>
      <InputContainer>
        <Input type='text' placeholder='Your email address' bg={'white'}/>
        <Input type='submit' value={'Sign Up'} bg={'teal'}/>
      </InputContainer>
    </Container>
  )
}
