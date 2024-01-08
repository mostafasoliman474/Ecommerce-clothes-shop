import React from 'react'
import styled from 'styled-components'
import BackgroundPhoto from '../asetess/banner/b19.jpg'
import { Navbar } from '../components/Navbar'
import { BlogData } from '../Data'
import { ArrowForward } from '@mui/icons-material'
import { NewsLetter } from '../components/NewsLetter'
import { Footer } from '../components/Footer'
import { Mobile } from '../Responsive'

const Container=styled.div`

`
const BannerContainer=styled.div`
    width: 100%;
    height: 45vh;
    background-image: url(${BackgroundPhoto});
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    
`
const Tilte=styled.h1`
    font-weight: 900;
    font-size: 40px;
    margin-top: 20px;
    margin-bottom: 20px;
`
const Desc=styled.p`
    font-weight: 600;
    opacity: .7;
`
const BlogContainer=styled.div`
    width: 70%;
    height: 40vh;
    display: flex;
    flex-direction: row;
    margin: auto;
    margin-top: 60px;
    ${Mobile({
        flexDirection:'column',
        width:'auto',
        height:'70vh',
        padding:'0 20px',
        gap:'10px'
    })}
`
const ImgContainer=styled.div`
    flex: 1;
    background-image: url(${props=>props.source});
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    background-position: top;
`
const BlogSec=styled.div`
    font-size: 50px;
    font-weight: 900;
    position: absolute;
    top: -35px;
    z-index: -1;
    color: gray;
`
const InfoContainer=styled.div`
    flex: 1;
    padding: 0px 0 0 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${Mobile({
        justifyContent:'flex-start',
        padding:'0',
        
    })}
`
const BlogTilte=styled.p`
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 20px;
`
const BlogInfo=styled.p`
    
    margin-bottom: 20px;
    color: #686868;;
`
const ReadMore=styled.a`
    cursor: pointer;
    font-weight: 800;
`
const SwapContainer=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
`
const Squer=styled.div`
    width: 50px;
    height: 40px;
    background-color:teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 800;
`
export const Blog = (item) => {
  return (
    <Container>
        <Navbar/>
        <BannerContainer>
            <Tilte>#readmore</Tilte>
            <Desc>Read all case studies about our products!</Desc>
        </BannerContainer> 
        {BlogData.map((item)=>(
            <BlogContainer>
                <ImgContainer source={item.blogImg}>
                    <BlogSec>{item.blogSection}</BlogSec>
                    {/* <BlogImg src={item.blogImg}/> */}
                </ImgContainer>
                
                <InfoContainer>
                    <BlogTilte>{item.blogTitle}</BlogTilte>
                    <BlogInfo>{item.blogInfo}</BlogInfo>
                    <ReadMore>Continue Reading -------</ReadMore>
                </InfoContainer>
            </BlogContainer>
            
        ))}
        <SwapContainer>
        <Squer>1</Squer>
        <Squer>2</Squer>
        <Squer>
            <ArrowForward/>
        </Squer>
        </SwapContainer>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}