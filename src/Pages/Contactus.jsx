import React from 'react'
import styled from 'styled-components'
import banner from '../asetess/about/banner.png'
import { Navbar } from '../components/Navbar'

import { AccessTimeOutlined, AttachEmailOutlined, ImportContactsOutlined, LocalPhoneOutlined } from '@mui/icons-material'
import { PeopleSub } from '../Data'
import { Mobile } from '../Responsive'
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
  ${Mobile({
    flexDirection:'column'
  })}
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
const Input = styled.input`
  height: 40px;
  outline:none;
  margin-bottom: 20px;
  border:1px solid lightgray;
  border-radius: 5px;
  padding-left: 10px;
`
const SocialContainer = styled.div`
  width: 95%;
  display: flex;
  margin: 30px auto 0px;
  border: 1px solid lightgray;
  padding: 50px;
  margin-bottom: 10px;
  ${Mobile({
    flexDirection:'column'
    ,gap:'20px'
  })}
`
const FormContainer = styled.form`
  flex:2;
  display: flex;
  flex-direction:column;
`
const PeopleContinaer = styled.div`
  flex:1;
  padding-left: 20px;
`
const IframeContainer = styled.div`
  width: 100%;
  height: 100%;
`
const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
`
const Massage = styled.textarea`
   border: 1px solid lightgray;
   padding-left: 10px;
   padding-top: 10px;
   height: 200px;
   outline: none;
   margin-bottom: 20px;
`
const Button = styled.button`
  padding: 10px 20px;
  color: white;
  background-color: teal;
  width: 20%;
  border-radius: 10px;
  cursor: pointer;
  ${Mobile({
    width:'auto'
  })}
`
const Image = styled.img`
  width: 80px;
  height: 80px;
`
const TitleName = styled.h2`

`
const InfoContainer = styled.div`
  line-height: 1.5rem;
`
const SinglePeople = styled.div`
  display: flex;
  gap:30px;
  margin-bottom: 30px;
  cursor: pointer;
`
const DescItem = styled.p`
  color: #2e2e2e;
  margin-bottom: 5px;
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
          <Input type='text' placeholder='Username' />
          <Input type='text' placeholder='Email' />
          <Input type='text' placeholder='Subject' />
          <Massage placeholder='Leave a massage' />
          <Button>Submit</Button>
        </FormContainer>
        <PeopleContinaer>
          {PeopleSub.map((item) => (
            <SinglePeople key={item.id}>
              <Image src={item.img} />
              <InfoContainer>
                <TitleName>{item.title}</TitleName>
                <Desc>
                  <DescItem>{item.jobTitle}</DescItem>
                  <DescItem>Phone: {item.phone}</DescItem>
                  <DescItem>Email: {item.email}</DescItem>

                </Desc>
              </InfoContainer>
            </SinglePeople>
          ))}

        </PeopleContinaer>
      </SocialContainer>
    </Container>
  )
}
