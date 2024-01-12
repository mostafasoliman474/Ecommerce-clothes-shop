import React, { useState } from 'react'
import styled from 'styled-components'
import banner from '../asetess/about/banner.png'
import { CartItems } from '../Data'
import { RemoveCircleOutline } from '@mui/icons-material'
import {Navbar} from '../components/Navbar'
// import {NewsLetter} from '../components/NewsLetter'
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
// const CartContainer = styled.div`
//     width: 80%;
//     margin:auto;
// `
// const CartProduct = styled.div`
//    display: flex;
//     flex-direction: row;
//     width: 100%;
//     margin: auto;
//     height: 15vh;
//     justify-content: space-between;
//     align-items: center;
//     border-bottom: 1px solid lightgray;
// `
const SelectedProdImg = styled.img`
    width: 65%;
    border-radius: 5px;
`
const ProductName = styled.p`
    text-align: center;
`
const Quantity = styled.input`
    width: 100px;
    height: 40px;
    border: 1px solid black;
    border-radius: 5px;
    text-align: center;
`
const Price = styled.p`
    font-size: 20px;
    font-weight: 800;
`
const Subtotal = styled.p`
    font-size: 20px;
    font-weight: 800;
`
const CouponContainer=styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`
// const Headlines=styled.p`
//     font-weight: 700;
//     margin-bottom: 15px;
// `
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
const CartTable=styled.table`
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    width: 95%;
    margin: auto;
`
const RowsTable=styled.tr`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: auto;
    height: auto;
    align-items: center;
    border-bottom: 1px solid lightgray;
    ${Mobile({
        flexDirection:'column',
        gap:'25px',
        padding:'15px 0'
    })}
`
const TableContentHeadlines=styled.th`
    height: 70px;
    display: flex;
    align-items: center;
    flex:1;
    justify-content: center;
    ${Mobile({
        display:'none'
    })}
`
const TableContent=styled.td`
    height:180px;
    display: flex;
    align-items: center;
    flex:1;
    justify-content: center;
    
`

export const Cart = () => {
    const [total, setTotal] = useState(1);
    const handelChange=(e)=>{
        const value=e.target.value;
        setTotal(value)
    }
    return (
        <Container>
            <Navbar/>
            <BannerContainer>
                <Title>#Cart</Title>
                <Desc>Add you coupon code & SAVE up to 70%!</Desc>
            </BannerContainer>
            <CartTable>
                <RowsTable>
                    <TableContentHeadlines>Remove</TableContentHeadlines>
                    <TableContentHeadlines>Image</TableContentHeadlines>
                    <TableContentHeadlines>Product</TableContentHeadlines>
                    <TableContentHeadlines>Price</TableContentHeadlines>
                    <TableContentHeadlines>Quantity</TableContentHeadlines>
                    <TableContentHeadlines>Subtotal</TableContentHeadlines>
                </RowsTable>
                {CartItems.map((item) => (
                    <RowsTable key={item.id}>
                        <TableContent>
                            <RemoveCircleOutline style={{ 'cursor': 'pointer' }} />
                        </TableContent>
                        <TableContent>
                            <SelectedProdImg src={item.selectedproduct} />
                        </TableContent>
                        <TableContent>
                            <ProductName>{item.prodeuctname}</ProductName>
                        </TableContent>
                        <TableContent>
                            <Price>{item.price}</Price>
                        </TableContent>
                        <TableContent>
                            <Quantity min={1} defaultValue={item.quantity} onChange={handelChange}/>
                        </TableContent>
                        <TableContent>
                            <Subtotal>{item.price * total} $</Subtotal>
                        </TableContent>
                    </RowsTable>
                ))}
                
            </CartTable>
            {/* <CartContainer>
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
            </CartContainer> */}
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
