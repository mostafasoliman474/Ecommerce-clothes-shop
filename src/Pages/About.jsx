import React from 'react'
import styled from 'styled-components'
import banner from '../asetess/about/banner.png'
import image from '../asetess/about/a6.jpg'
import video from '../asetess/about/1.mp4'
import { Navbar } from '../components/Navbar'
import { NewsLetter } from '../components/NewsLetter'
import { Footer } from '../components/Footer'
import { Features } from '../components/Features'
import { Mobile } from '../Responsive'

const Container = styled.div`
    
`
const Banner = styled.div`
    background-image: url(${banner});
    width: 100%;
    height: 40vh;
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 40;
    margin-top: 20px;
    margin-bottom: 10px;
`
const Desc = styled.p`
    opacity: .7;
`
const ContentContainer = styled.div`
  width: 90%;
  margin:auto;
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  ${Mobile({
    flexDirection:'column'
  })}
`
const ImageContainer = styled.div`
  flex: 1;
`
const Image = styled.img`
    width: 100%;
`
const InfoContainer = styled.div`
  flex: 1;
  padding-left: 30px;
  margin: 40px 0 0 0 ;
`
const HeadLine = styled.p`
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 20px;
`
const Info = styled.p`
    
`
const SliderContainer = styled.div`
  width: 100%;
  background-color: #494949;
  margin-top: 50px;
  border-radius: 5px;
  height: 5vh;
  display: flex;
  color: white;
  align-items: center;
  
`
const SlideText = styled.marquee`
  width: 100%;
  font-size: 17px;
`
const AppDownload = styled.h1`
  text-align: center;
  margin: 30px 0;
  font-weight: 900;
`
const Span = styled.span`
  text-decoration: underline;
  color: #0000ff47;
  cursor: pointer;
`
const VedioContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;

`
const Video = styled.video`
 
  width: 60%;
  border-radius: 20px;
  margin-top: 20px;
  ${Mobile({
    width:'100%',
    height:'60vh'
  })}
  
`
const Source = styled.source`

`
export const About = () => {
  return (
    <Container>
      <Navbar />
      <Banner>
        <Title>#KnowUS</Title>
        <Desc>Lorem ipsum sit amet, consectetur</Desc>
      </Banner>
      <ContentContainer>
        <ImageContainer>
          <Image src={image} />
        </ImageContainer>
        <InfoContainer>
          <HeadLine>Who We Are?</HeadLine>
          <Info>The DANA group is one of the world’s leading fashion companies – with the brands DANA and DANA Home, COS, & Other Stories, Monki, Weekday Cheap Monday and ARKET. Each with its own unique identity, all our brands are united by a passion for fashion and quality and the drive to dress customers in a sustainable way.It all started with a single womenswear store in Västerås, Sweden, in 1947. Today, the H&M group has several clearly defined fashion brands and a strong global presence. Our expansion is long-term and we grow both online and with new stores, in existing as well as new markets. We want to make sustainable, good-quality fashion accessible to as many people as possible.</Info>
          <SliderContainer>
            <SlideText>We welcomed 13,000 new colleagues in 2016, taking our team to 161,000.
              The H&M group’s sales including VAT reached SEK 223 billion in 2016.
              We have 43 online markets and more than 4,500 stores in 69 markets.
            </SlideText>
          </SliderContainer>
        </InfoContainer>
      </ContentContainer>

      <VedioContainer>
        <AppDownload>Download Our <Span>App</Span></AppDownload>
        <Video muted autoPlay loop>
          <Source src={video} type="video/mp4" />
        </Video>
      </VedioContainer>
      <Features/>
      <NewsLetter />
      <Footer />
    </Container>
  )
}
