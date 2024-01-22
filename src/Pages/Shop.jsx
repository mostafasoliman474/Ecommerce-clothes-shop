import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Navbar } from '../components/Navbar'
import bcImg from '../asetess/banner/b1.jpg'
// import { NewArrivalItems, ProductItem } from '../Data'
import { Product } from '../components/Product'
import { NewsLetter } from '../components/NewsLetter'
import { Footer } from '../components/Footer'
import { ArrowForward } from '@mui/icons-material'
import axios from 'axios'
const Container=styled.div`
    
`
const Banner=styled.div`
    height: 45vh;
    background-image: url(${bcImg});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    flex-direction: column;
`
const Title=styled.h1`
    font-size: 50px;
    margin: 10px 0;
`
const Desc=styled.p`
    opacity: 0.7;
    font-size: 14px;
`
const ProductView=styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0;
    justify-content: center;
`
const SwapContainer=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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
export const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const getData=async()=>{

            try {
                const res=await axios.get('http://localhost:5000/api/product')
                setProducts(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getData();
    },[])
    console.log(products)
  return (
    <Container>
        <Navbar/>
        <Banner>
            <Title>#stayhome</Title>
            <Desc>Save more with coupons & up to 70% off!</Desc>
        </Banner>
        <ProductView>
            {products.map((item)=>(
                <Product item={item}/>
            ))}
            {/* {NewArrivalItems.map((item)=>(
                <Product item={item}/>
            ))} */}
        </ProductView>
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
