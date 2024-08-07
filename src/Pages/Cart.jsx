import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import banner from '../asetess/about/banner.png'
import { RemoveCircleOutline } from '@mui/icons-material'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Mobile } from '../Responsive'
import { useDispatch, useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { removeProduct, resetCart, updateProducts } from '../redux/cartReducer'
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
const SelectedProdImg = styled.img`
    height: 98%;
    border-radius: 5px;
    ${Mobile({
    width: '50%'
})}
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
const CouponContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`
const BigHeadlines = styled.h1`
    font-weight: 700;
    margin-bottom: 15px;
`
const Coupon = styled.input`
    border: 1px solid lightgray;
    padding-left: 5px;
    margin-right: 10px;
    border-radius: 5px;
    width: 50%;
`
const Submit = styled.button`
    width: 100px;
    height: 40px;
    color:white;
    background-color: teal;
    border-radius: 5px;
    cursor: pointer;
`
const TransactionContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    margin: auto;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 30px;
    ${Mobile({
    flexDirection: 'column'
    , gap: '20px'
})}
`
const CheckoutContainer = styled.div`
    flex: 1 1 0%;
    border: 3px solid black;
    padding: 10px 30px;
    display: flex;
    flex-direction: column;
    height: 40vh;
`
const CartContainers = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    margin-bottom: 20px;
`
const ValueDesc = styled.div`

`
const Value = styled.div`

`
const InputField = styled.div`
    display: flex;
    flex-direction: row;
`
const CheckOutBottom = styled.button`
    cursor: pointer;
    width: 70%;
    color: white;
    background-color: teal;
    border-radius: 5px;
    height: 40px;
    &:disabled{
        cursor: not-allowed;
    }
`
const CartTable = styled.table`
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    width: 95%;
    margin: auto;
`
const RowsTable = styled.tr`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: auto;
    height: auto;
    align-items: center;
    border-bottom: 1px solid lightgray;
    ${Mobile({
    flexDirection: 'column',
    gap: '25px',
    padding: '15px 0'
})}
`
const TableContentHeadlines = styled.th`
    height: 70px;
    display: flex;
    align-items: center;
    flex:1;
    justify-content: center;
    ${Mobile({
    display: 'none'
})}
`
const TableContent = styled.td`
    height:180px;
    display: flex;
    align-items: center;
    flex:1;
    justify-content: center;
    
`
export const Cart = () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const {currentUser} = useSelector((state) => state.user);
    const [stripeToken, setStripeToken] = useState('')
    const { products, totalPrice } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onToken = (token) => {
        setStripeToken(token)
    }
    useEffect(() => {
        try {
            const getData = async () => {
                const res = await axios.post(`${process.env.REACT_APP_BACKEND_SERVER_URL}/api/checkout/payment`, {
                    tokenId: stripeToken.id,
                    amount: totalPrice * 100
                });
                dispatch(resetCart())
                navigate('/success', { state: { data: res.data,products,currentUser } }) 
            }
            (stripeToken && totalPrice > 0) && getData();
        } catch (error) {
            console.log(error)
        }
    }
        , [stripeToken, totalPrice, navigate, dispatch,products,currentUser])
    const handelDelete = (item) => {
        console.log(item)
        dispatch(removeProduct(item))
    }
    const hendelChange = (e, item) => {
        const updatedValue = e.target.value
        dispatch(updateProducts({ updatedValue, item }))
    }
    return (
        <Container>
            <Navbar />
            <BannerContainer>
                <Title>#Cart</Title>
                <Desc>Add you coupon code & SAVE up to 70%!</Desc>
            </BannerContainer>
            <CartTable>
                <RowsTable>
                    <TableContentHeadlines>Remove</TableContentHeadlines>
                    <TableContentHeadlines>Image</TableContentHeadlines>
                    <TableContentHeadlines>Product</TableContentHeadlines>
                    <TableContentHeadlines>Color</TableContentHeadlines>
                    <TableContentHeadlines>Price</TableContentHeadlines>
                    <TableContentHeadlines>Quantity</TableContentHeadlines>
                    <TableContentHeadlines>Subtotal</TableContentHeadlines>
                </RowsTable>
                {products.map((item) => (
                    <RowsTable key={item.id}>
                        <TableContent onClick={() => handelDelete(item)}>
                            <RemoveCircleOutline style={{ 'cursor': 'pointer' }} />
                        </TableContent>
                        <TableContent>
                            <SelectedProdImg src={item.img} />
                        </TableContent>
                        <TableContent>
                            <ProductName>{item.title}</ProductName>
                        </TableContent>
                        <TableContent>
                            <ProductName>{item.chooseColor}</ProductName>
                        </TableContent>
                        <TableContent>
                            <Price>{item.price}$</Price>
                        </TableContent>
                        <TableContent>
                            <Quantity min={1} defaultValue={item.chooseAmount} type='number' onChange={(e) => hendelChange(e, item)} />
                        </TableContent>
                        <TableContent>
                            <Subtotal>{item.price * item.chooseAmount} $</Subtotal>
                        </TableContent>
                    </RowsTable>
                ))}
            </CartTable>
            <TransactionContainer>
                <CouponContainer>
                    <BigHeadlines>Apply Coupon</BigHeadlines>
                    <InputField>
                        <Coupon type='text' placeholder='Enter your Coupon' />
                        <Submit type='submit'>Submit</Submit>
                    </InputField>
                </CouponContainer>
                <CheckoutContainer>
                    <BigHeadlines>Cart Totals</BigHeadlines>
                    <CartContainers>
                        <ValueDesc>cart subtotal</ValueDesc>
                        <Value>{totalPrice}$</Value>
                    </CartContainers>
                    <CartContainers>
                        <ValueDesc>shipping</ValueDesc>
                        <Value>Free</Value>
                    </CartContainers>
                    <CartContainers>
                        <ValueDesc>total</ValueDesc>
                        <Value>{totalPrice}$</Value>
                    </CartContainers>
                    <StripeCheckout
                        key={10}
                        billingAddress
                        image='https://www.sdeyildizelektrik.com/Upload/Dosyalar/resim-png/cata-aydinlatma-fiyatlari-9da3540e-c74d-43f7-ae01-f741d96dec79.png?width=1200&format=webx&quality=80&overlay=varlik-8-60d5d6c6-78c3-45b8-8348-95c5f234a502.png&overlay.opacity=0'
                        token={onToken}
                        stripeKey={API_KEY}
                        shippingAddress
                        amount={totalPrice * 100}
                        currency='usd'
                        name='CATA'
                        description={`your total is $${totalPrice}`}
                    >
                        <CheckOutBottom type='submit' disabled={totalPrice<=0}>Proceed to checkout</CheckOutBottom>
                    </StripeCheckout>
                </CheckoutContainer>
            </TransactionContainer>
            <Footer />
        </Container>
    )
}