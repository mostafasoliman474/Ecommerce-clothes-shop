import React from 'react'
import styled from 'styled-components'
import backgroundImg from '../asetess/hero4.png'
import buttonImg from '../asetess/button.png'
const Container=styled.div`
    height: 100vh;
    width: 100%;
    background-image: url(${backgroundImg});
    background-size: cover;
    display: flex;
    align-items: center;
`
const Wrapper=styled.div`
    margin-left: 200px;
`
const Title=styled.p`
    margin-bottom: 10px;
    color: #222;
    font-weight: ${props=>props.size==='bold'&&'bold'};
    opacity: ${props=>props.opacity==='gray'&&.6};
`
const HeadLine=styled.h1`
    font-size: 40px;
    margin-bottom: 10px;
    font-weight: 700;
    color: #222;
    color:${props=>props.color==='teal'&&'teal'};
`
const ButtonContainer=styled.div`
    background-image: url(${buttonImg});
    height: 50px;
    width: 240px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: teal;
    font-weight: 800;
    margin-top: 30px;
    cursor: pointer;
`
export const Announcement = () => {
  return (
    <Container>
        <Wrapper >
            <Title size='bold'>
                Trade-in-offer
            </Title>
            <HeadLine>
                Super value deals
            </HeadLine>
            <HeadLine color='teal'>
               On all products 
            </HeadLine>
            <Title opacity='gray'>
                Save more with coupons & up to 70% off!
            </Title>
            <ButtonContainer>
             
                Shop Now
            </ButtonContainer>
            
           
        </Wrapper>
    </Container>
  )
}
