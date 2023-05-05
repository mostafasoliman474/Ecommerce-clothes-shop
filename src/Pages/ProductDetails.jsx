import React from 'react'
import styled from 'styled-components'
import { Navbar } from '../components/Navbar'
import { Add, Remove } from '@mui/icons-material'
import { ViewProduct } from '../Data'
const Container=styled.div`

`
const ProductContainer=styled.div`
  height: 70vh;
  width: 100%;
`
const Left=styled.div`
  
`
const MainImg=styled.div`
  
`
const SecondaryImgContainer=styled.div`
  
`
const Image=styled.img`
  
`
const Right=styled.div`
  
`
const Department=styled.p`
  
`
const ProductTitle=styled.h1`
  
`
const Price=styled.p`
  
`
const SizeContainer=styled.div`
  
`
const Size=styled.p`
  
`
const ProductInfo=styled.p`
  
`
const AmountContainer=styled.div`
  
`
const Amount=styled.p`
  
`
const AddCartButton=styled.p`
  
`
export const ProductDetails = (item) => {
  return (
    <Container>
        <Navbar/>
        {ViewProduct.map((item)=>(
          <ProductContainer>
          <Left>
            <MainImg>
              <Image src={item.mainImg}/>
            </MainImg>
            <SecondaryImgContainer>
              <Image src={item.secImg1}/>
              <Image src={item.secImg2}/>
              <Image src={item.secImg3}/>
              <Image src={item.secImg4}/>
            </SecondaryImgContainer>
          </Left>
          <Right>
            <Department>{item.department}</Department>
            <ProductTitle>{item.title}</ProductTitle>
            <Price>{item.price}</Price>
            <SizeContainer>
              <Size>S</Size>
              <Size>M</Size>
              <Size>L</Size>
              <Size>XL</Size>
            </SizeContainer>
            <AmountContainer>
              <Add/>
              <Amount></Amount>
              <Remove/>
              <AddCartButton></AddCartButton>
            </AmountContainer>
            <ProductInfo>{item.desc}</ProductInfo>
          </Right>
        </ProductContainer>
        ))}
        
    </Container>
  )
}
