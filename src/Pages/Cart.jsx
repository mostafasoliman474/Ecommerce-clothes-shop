import React from 'react'
import styled from 'styled-components'
import banner from '../asetess/about/banner.png'
import { CartItems } from '../Data'
import { RemoveCircleOutline } from '@mui/icons-material'
import {Navbar} from '../components/Navbar'
import {NewsLetter} from '../components/NewsLetter'
import {Footer} from '../components/Footer'
import { Mobile } from '../Responsive'
const Container = styled.div`
    
`
const BannerContainer = styled.div`
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
const CartContainer = styled.div`
    width: 80%;
    margin:auto;
`
const CartProduct = styled.div`
   display: flex;
    flex-direction: row;
    width: 100%;
    margin: auto;
    height: 15vh;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid lightgray;
`
const SelectedProdImg = styled.img`
    width: 8%;
    border-radius: 5px;
`
const ProductName = styled.p`
    
`
const Quantity = styled.input`
    width: 100px;
    height: 40px;
    border: 1px solid black;
    border-radius: 5px;
    text-align: center;
`
const Price = styled.p`
    
`
const Subtotal = styled.p`
    
`
const CouponContainer=styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`
const Headlines=styled.p`
    font-weight: 700;
    margin-bottom: 15px;
`
const BigHeadlines=styled.h1`
    font-weight: 700;
    margin-bottom: 15px;
`
const Coupon=styled.input`
    border: 1px solid lightgray;
    padding-left: 5px;
    margin-right: 10px;
    border-radius: 5px;
    width: 50%;
`
const Submit=styled.button`
    width: 100px;
    height: 40px;
    color:white;
    background-color: teal;
    border-radius: 5px;
    cursor: pointer;
`

const TransactionContainer=styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    margin: auto;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 30px;
    ${Mobile({
        flexDirection:'column'
        ,gap:'20px'
    })}
`
const CheckoutContainer=styled.div`
    
    flex: 1 1 0%;
    border: 3px solid black;
    padding: 10px 30px;
    display: flex;
    flex-direction: column;
    height: 40vh;
`
const CartContainers=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    margin-bottom: 20px;
`
const ValueDesc=styled.div`

`
const Value=styled.div`

`
const InputField=styled.div`
    display: flex;
    flex-direction: row;

`
const CheckOutBottom=styled.button`
    cursor: pointer;
    width: 70%;
    color: white;
    background-color: teal;
    border-radius: 5px;
    height: 40px;
`

export const Cart = () => {
    const Delete=()=>{
        
    }
    return (
        <Container>
            <Navbar/>
            <BannerContainer>
                <Title>#Cart</Title>
                <Desc>Add you coupon code & SAVE up to 70%!</Desc>
            </BannerContainer>
            <CartContainer>
                    <CartProduct>
                        <Headlines>Remove</Headlines>
                        <Headlines>Image</Headlines>
                        <Headlines>Product</Headlines>
                        <Headlines>Price</Headlines>
                        <Headlines>Quantity</Headlines>
                        <Headlines>Subtotal</Headlines>
                    </CartProduct>
                {CartItems.map((item) => (
                    <CartProduct>
                        <RemoveCircleOutline style={{ 'cursor': 'pointer' }} />
                        <SelectedProdImg src={item.selectedproduct} />
                        <ProductName>{item.prodeuctname}</ProductName>
                        <Price>{item.price}</Price>
                        <Quantity min={1} defaultValue={item.quantity} />
                        <Subtotal>100</Subtotal>
                    </CartProduct>
                ))}
            </CartContainer>
            <TransactionContainer>
                <CouponContainer>
                    <BigHeadlines>Apply Coupon</BigHeadlines>
                    <InputField>
                        <Coupon type='text' placeholder='Enter your Coupon'/>
                        <Submit type='submit'>Submit</Submit>
                    </InputField>
                </CouponContainer>
                <CheckoutContainer>
                    <BigHeadlines>Cart Totals</BigHeadlines>
                    <CartContainers>
                        <ValueDesc>cart subtotal</ValueDesc>
                        <Value>300$</Value>
                    </CartContainers>
                    <CartContainers>
                    <ValueDesc>shipping</ValueDesc>
                        <Value>Free</Value>
                    </CartContainers>
                    <CartContainers>
                        <ValueDesc>total</ValueDesc>
                        <Value>500$</Value>
                    </CartContainers>
                    <CheckOutBottom type='submit' >Proceed to checkout</CheckOutBottom>
                </CheckoutContainer>
            </TransactionContainer>
            
           <Footer/>
        </Container>
    )
}
