import { FacebookOutlined, Instagram, Pinterest, Twitter, YouTube } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import logoImg from '../asetess/logo.png'
import AppleImg from '../asetess/pay/app.jpg'
import GoogleImg from '../asetess/pay/play.jpg'
import PaymentImg from '../asetess/pay/pay.png'
const Container=styled.div`
    background-color:white;
    margin: 50px 0 20px 0;
`
const Wrapper=styled.div`
    display: flex;
    padding: 0 40px;
    flex-direction: row;
    
`
const Right=styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
`
const Center=styled.div`
    flex: 1;
`
const Left=styled.div`
    flex: 1;
`
const HeadLine=styled.div`
    font-weight: 900;
    font-size: 14px;
    margin-bottom: 10px;
`
const ContactsContainer=styled.div`
    
`
const SocialContainer=styled.div`
    
`
const Contact =styled.div`
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
`
const Logo=styled.img`
    margin-bottom: 10px;
`
const Installition=styled.p`
    margin-bottom: 10px;
    font-weight: 700;
`
const StoreContainer=styled.div`
    margin: 10px 0;
`
const LinkContainer=styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
`
const ULContainer=styled.ul`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
    padding-bottom: 10px;
`
const Link=styled.a`
    opacity: .8;
    font-size: 12px;;
    cursor: pointer;
`

const Store=styled.img`
    border: 0.5px solid teal;
    border-radius: 10px;
    margin-right: 5px;
    cursor: pointer;
`

const PaymentContainer=styled.div`
    
`
const StoresTitle=styled.p`
    margin-bottom: 10px;
    font-size: 12px;
`
const PaymentImage=styled.img`
   cursor: pointer; 
`
const PaymentTilte=styled.p`
    margin-bottom: 10px;
    font-size: 12px;
`
const ULTitle=styled.p`
    font-weight: bold;
`
const Line=styled.span`
    opacity: 0.8;
    font-weight: 400;
`

export const Footer = () => {
  return (
    <Container>
        <Wrapper>
            
            
            <Left>
                <Logo src={logoImg}></Logo>
                <HeadLine>Contacts</HeadLine>
                <ContactsContainer>
                    <Contact>
                    Adress: <Line>mo ashraf street giza</Line>
                    </Contact>
                    <Contact>
                     Phone: <Line>0105587625920</Line>
                    </Contact>
                    <Contact>
                       Hours: <Line>10:00 - 18:00 , Mon-Sat </Line>
                    </Contact>

                </ContactsContainer>
                <HeadLine>
                    Follow Us
                </HeadLine>
                <SocialContainer>
                    <FacebookOutlined fontSize='small' style={{marginRight:'4px',cursor:'pointer'}}/>
                    <Twitter fontSize='small' style={{marginRight:'4px',cursor:'pointer'}}/>
                    <Instagram fontSize='small' style={{marginRight:'4px',cursor:'pointer'}}/>
                    <Pinterest fontSize='small' style={{marginRight:'4px',cursor:'pointer'}}/>
                    <YouTube fontSize='small' style={{marginRight:'4px',cursor:'pointer'}}/>
                    
                    
                </SocialContainer>
            </Left>
            <Center>
                <LinkContainer>
                    <ULContainer>
                        <ULTitle>About</ULTitle>
                        <Link>About Us</Link>
                        <Link>Delivery Information</Link>
                        <Link>Privacy Policy</Link>
                        <Link>Terms & Conditions</Link>
                        <Link>Contact Us</Link>
                    </ULContainer> 
                    <ULContainer>
                        <ULTitle>My Account</ULTitle>
                        <Link>Sign In</Link>
                        <Link>View Cart</Link>
                        <Link>My Wishlist</Link>
                        <Link>Track My Order</Link>
                        <Link>Help</Link>
                    </ULContainer>
                </LinkContainer>
            </Center>
            <Right>
                <Installition>Install App</Installition>
                <StoreContainer>
                    <StoresTitle>From App Store or Google Play</StoresTitle>
                    <Store src={AppleImg} ></Store>
                    <Store src={GoogleImg}></Store>
                </StoreContainer>
                <PaymentContainer>
                    <PaymentTilte>Secured Payment Gateways</PaymentTilte>
                    <PaymentImage src={PaymentImg}/>
                </PaymentContainer>
            </Right>
        </Wrapper>  
    </Container>
  )
}
