import React from 'react'
import styled from 'styled-components'
import banner from '../asetess/about/banner.png'
import { Navbar } from '../components/Navbar'
import { AccessTimeOutlined, AttachEmailOutlined, ImportContactsOutlined, LocalPhoneOutlined } from '@mui/icons-material'
const Container = styled.div`
    
`
const BannerContainer = styled.div`
  background-image: url(${banner});
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
`

const Title = styled.h1`
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 30px;
`
const Desc = styled.p`
  opacity:.7;
`
const LeftContainer = styled.div`
  flex:1;
`
const InformationContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin-top: 50px;
  margin: 50px auto 0 auto;
`
const SubTtile = styled.div`
  opacity: .7;
`
const HeadLINE = styled.h2`
  margin: 15px 0;
`
const HeadOffice = styled.h3`
  
`
const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`
const ContactInfo = styled.p`
  font-size: 14px;
  margin-left: 10px;
  opacity: .7;
`
const RightContainer = styled.div`
  flex: 1;
  
  height:40vh;
`
const Input=styled.input`

`
const SocialContainer=styled.div`
`
const FormContainer=styled.div`
`
const PeopleContinaer=styled.div`
`
const IframeContainer=styled.div`
  width: 100%;
  height: 100%;
`
const Iframe=styled.iframe`
  width: 100%;
  height: 100%;
`

export const Contactus = () => {
  return (
    <Container>
      <Navbar />
      <BannerContainer>
        <Title>#Let's_Talk</Title>
        <Desc>LEAVE A MASSAGE,We love to hear from you!</Desc>
      </BannerContainer>
      <InformationContainer>
        <LeftContainer>
          <SubTtile>GET IN TOUCH</SubTtile>
          <HeadLINE>Visit one of our agency locations of contact us today</HeadLINE>
          <HeadOffice>Head Office</HeadOffice>
          <ContactContainer>
            <ImportContactsOutlined />
            <ContactInfo>44 Elmoeez Street,Elhosen,Cairo,Egypt </ContactInfo>
          </ContactContainer>

          <ContactContainer>
            <AttachEmailOutlined />
            <ContactInfo>Mostafa_mohdy@gmail.com</ContactInfo>
          </ContactContainer>

          <ContactContainer>
            <LocalPhoneOutlined />
            <ContactInfo>01110734104</ContactInfo>
          </ContactContainer>

          <ContactContainer>
            <AccessTimeOutlined />
            <ContactInfo>Saturday To Monday from : 9am to 4pm</ContactInfo>
          </ContactContainer>
        </LeftContainer>
        <RightContainer>
          <IframeContainer>
          
            <Iframe width={700} height={400} src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.4407426092334!2d31.36189537552165!3d30.395234801865417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14580979a754294d%3A0xf8def6ca6a228025!2z2K_Yp9mE2YrYr9inICh3ZWRkaW5nIGRyZXNzKQ!5e0!3m2!1sen!2seg!4v1689807633899!5m2!1sen!2seg'></Iframe>
          </IframeContainer>
        </RightContainer>
      </InformationContainer>
      <SocialContainer>
        <FormContainer>
          <SubTtile>LEAVE A MASSAGE</SubTtile>
          <HeadLINE>We love to hear from you</HeadLINE>
          <Input type='text' placeholder='Username'/>
          <Input type='text' placeholder='Email'/>
          <Input type='text' placeholder='Subject'/>
          <Input type='text' placeholder='Massage'/>
        </FormContainer>
        <PeopleContinaer>

        </PeopleContinaer>
      </SocialContainer>
    </Container>
  )
}
