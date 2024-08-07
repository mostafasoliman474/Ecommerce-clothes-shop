import { ShoppingCartOutlined, StarBorderOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { Mobile } from '../Responsive'
import { Link } from 'react-router-dom'
const Container = styled.a`
    display: flex;
    flex-direction: column;
    width: 300px;
    border: 1px solid lightgray;
    border-radius: 20px;
    margin: 20px;
    transition:ease-out 70ms;
    height: 450px;
    padding: 10px;
    ${Mobile({
    // width: '350px',
    // height: '430px'
    })}
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;    
    }
`
const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    cursor: pointer;
    height: 100%;
    width: 100%;
    /* background-image: url(${props=>props.photo}); */
    background-size: cover;
    height: 70%;
`
const InfoContainer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 10px;
    height: 30%;
`
const Brand = styled.p`
    color: #222;
    font-size: 12px;
    opacity:.7;
    margin-bottom: 3px;
`
const Image = styled.img`
    width: 100%;
    border-radius:30px ;
    padding:  10px 10px;
`
const Desc = styled.p`
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 3px;
    color: teal;
`
const StarContainer = styled.div`
    margin-bottom: 3px;
`
const Price = styled.p`
    color: teal;
    font-weight: 700;
    text-decoration: none;
`
const BannerFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: end;
    width: 100%;
`
const CartContainer = styled.div`
    width: 40px;
    height: 40px;
    background-color: rgb(141, 207, 179);
    color: teal;
    cursor: pointer;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`
const PriceRateContainer = styled.div`
    
`
export const Product = ({ item }) => {
    return (
        <Container href={`/productdetails/${item._id}`} style={{textDecoration:'none'}}>
            {/* <Link to={`/productdetails/${item._id}`} style={{textDecoration:'none'}}> */}
            {/* photo={item.img}/ */}
            <ImageContainer>
                <Image src={item.img} />
            </ImageContainer>
            <InfoContainer>
                <Brand >{item.producer}</Brand>
                <Desc >{item.title}</Desc>
                <BannerFooter>
                    <PriceRateContainer>
                        <StarContainer>
                            <StarBorderOutlined style={{ color: 'black' }} />
                            <StarBorderOutlined style={{ color: 'black' }} />
                            <StarBorderOutlined style={{ color: 'black' }} />
                            <StarBorderOutlined style={{ color: 'black' }} />
                            <StarBorderOutlined style={{ color: 'black' }} />
                        </StarContainer>
                        <Price>{item.price}EGP</Price>
                    </PriceRateContainer>
                    <CartContainer>
                        <ShoppingCartOutlined />
                    </CartContainer>
                </BannerFooter>
            </InfoContainer>
            
        </Container>
    )
}
