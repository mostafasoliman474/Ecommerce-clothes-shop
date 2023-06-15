import React from 'react'
import styled from 'styled-components'
import banner from '../asetess/about/banner.png'
import { Navbar } from '../components/Navbar'
import { AccessTimeOutlined, AttachEmailOutlined, ImportContactsOutlined,  LocalPhoneOutlined } from '@mui/icons-material'
const Container=styled.div`
    
`
const BannerContainer=styled.div`
  background-image: url(${banner});
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
`
const Title=styled.h1`
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 30px;
`
const Desc=styled.p`
  opacity:.7;
`
const LeftContainer=styled.div`
  
`
const GetInTouch=styled.div`
  
`
const HeadLINE=styled.div`
  
`
const HeadOffice=styled.div`
  
`
const ContactContainer=styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`
const ContactInfo=styled.p`
  font-size: 14px;
  margin-left: 10px;
  opacity: .7;
`
const RightContainer=styled.div`
  
`


export const Contactus = () => {
  return (
    <Container>
      <Navbar/>
      <BannerContainer>
        <Title>#Let's_Talk</Title>
        <Desc>LEAVE A MASSAGE,We love to hear from you!</Desc>
      </BannerContainer>
      <LeftContainer>
        <GetInTouch>GET IN TOUCH</GetInTouch>
        <HeadLINE>Visit one of our agency locations of contact us today</HeadLINE>
        <HeadOffice>Head Office</HeadOffice>
        <ContactContainer>
          <ImportContactsOutlined/>
          <ContactInfo>44 Elmoeez Street,Elhosen,Cairo,Egypt </ContactInfo>
        </ContactContainer>

        <ContactContainer>
          <AttachEmailOutlined/>
          <ContactInfo>Mostafa_mohdy@gmail.com</ContactInfo>
        </ContactContainer>

        <ContactContainer>
          <LocalPhoneOutlined/>
          <ContactInfo>01110734104</ContactInfo>
        </ContactContainer>
        
        <ContactContainer>
          <AccessTimeOutlined/>
          <ContactInfo>Saturday To Monday from : 9am to 4pm</ContactInfo>
        </ContactContainer>
      </LeftContainer>
      <RightContainer>

      </RightContainer>
    </Container>
  )
}
