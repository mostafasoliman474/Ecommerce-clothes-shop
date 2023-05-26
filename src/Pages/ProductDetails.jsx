import React from 'react'
import styled from 'styled-components'
import { Navbar } from '../components/Navbar'
// import { Add, Remove } from '@mui/icons-material'
import { NewsLetter } from '../components/NewsLetter'
import { NewArrival } from '../components/NewArrival'
import { ViewProduct } from '../Data'
import { Footer } from '../components/Footer'
const Container = styled.div`

`

const ProductContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction:row;
  padding-top: 100px;

`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0 10px;
  height: 80%;
  
`
const MainImg = styled.div`
    width:75%;
    height: 80%;

    display: flex;
    justify-content: flex-end;
    background-image: url(${props => props.src});
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;
`
const SecondaryImgContainer = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  width: 75%;
`
const Image = styled.img`
    width: 24%;
    border-radius: 10px;
    margin-top: 5px;
    cursor: pointer;
    &:hover{
      border: 1px solid teal;
      transition: ease-out 80ms;
    }
`
const Right = styled.div`
  flex: 1.4;
  padding-left: 3rem;
  display: flex;
  flex-direction: column;
  align-items: first baseline;
  margin: 20px 0 0 0 ;
`
const Department = styled.p`
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 20px;
`
const ProductTitle = styled.p`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
`
const Price = styled.p`
    font-size: 22px;
    font-weight: bold;
    margin: 5px 0;
`
const SizeContainer = styled.select`
  width: 100px;
  height: 30px;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 3px;
  font-weight: 600;
  outline: none;
`
const Size = styled.option`
  
`
const AmountContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 200px;
    
    margin: 10px 0;
`
const Amount = styled.input`
    width: 60px;
    border: 1px solid lightgray;
    height: 40px;
    padding-left: 10px;
    font-weight: 800;
    border-radius: 10px;
    outline: none;
    margin: 0 10px 0 0 ;
`
const AddCartButton = styled.button`
  color: white;
  background: teal;
  padding: 1rem .5rem;
  border-radius: 5px;
  cursor: pointer;
`
const ProductInfoTitle=styled.p`
  font-size: 20px;
  margin:20px 0 ;
  font-weight: bold;
`
const ProductInfo = styled.p`
  width: 80%;
  color: #000000ba;
`
export const ProductDetails = (item) => {
  return (
    <Container>
      <Navbar />

      {ViewProduct.map((item) => (
        <ProductContainer>
          <Left>
            <MainImg src={item.mainImg} />
            <SecondaryImgContainer>
              <Image src={item.secImg1} position="secondary" />
              <Image src={item.secImg2} position="secondary" />
              <Image src={item.secImg3} position="secondary" />
              <Image src={item.secImg4} position="secondary" />
            </SecondaryImgContainer>
          </Left>
          <Right>
            <Department>{item.department}</Department>
            <ProductTitle>{item.title}</ProductTitle>
            <Price>{item.price}</Price>
            <SizeContainer>
              <Size disabled>select size</Size>
              <Size>S</Size>
              <Size>M</Size>
              <Size>L</Size>
              <Size>XL</Size>
            </SizeContainer>
            <AmountContainer>
              <Amount type='number' placeholder='0' min={0} />
              <AddCartButton>Add to cart</AddCartButton>
            </AmountContainer>
            <ProductInfoTitle>Product Details</ProductInfoTitle>
            <ProductInfo>{item.desc}</ProductInfo>
          </Right>
        </ProductContainer>
      ))}
      <NewArrival />
      <NewsLetter />
      <Footer />
    </Container>
  )
}
