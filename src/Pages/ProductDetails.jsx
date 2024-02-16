import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Navbar } from '../components/Navbar'

import { NewsLetter } from '../components/NewsLetter'
import { NewArrival } from '../components/NewArrival'
// import { ViewProduct } from '../Data'
import { Footer } from '../components/Footer'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../redux/cartReducer'
import { Mobile } from '../Responsive'
const Container = styled.div`

`

const ProductContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction:row;
  padding-top: 100px;
  
  ${Mobile({
  flexDirection: 'column',
  alignItems: 'center',
  // height: '120vh',
  textAlign: 'center'
})}
  
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 3rem;
  height: 100%; 
  ${Mobile({
    alignItems:"center",
    padding: "0",


  })} 
`
const MainImg = styled.img`
    width:55%;
    display: flex;
    background-image: url(${props => props.src});
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 10px 10px 10px 10px ;
    ${Mobile({
      width:"90%"
    })}
`
// const SecondaryImgContainer = styled.div`
//   display: flex;
//   flex-direction:row;
//   justify-content: space-between;
//   width: 75%;
// `
// const Image = styled.img`
//     width: 24%;
//     border-radius: 10px;
//     margin-top: 5px;
//     cursor: pointer;
//     &:hover{
//       border: 1px solid teal;
//       transition: ease-out 80ms;
//     }
// `
const Right = styled.div`
  flex: 1.5;
  /* padding-left: 3rem; */
  display: flex;
  flex-direction: column;
  align-items: first baseline;
  margin: 20px 0 0 0 ;
  ${Mobile({
  alignItems: 'center'
})}
`
// const Department = styled.p`
//     font-weight: bold;
//     font-size: 14px;
//     margin-bottom: 20px;
// `
const ProductTitle = styled.p`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
`
const Price = styled.p`
    font-size: 22px;
    font-weight: bold;
    margin: 5px 0;
`
const OptionContainer = styled.select`
  width: 115px;
  height: 30px;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 3px;
  font-weight: 600;
  outline: none;
  margin-bottom: ${props => props.type === 'color' && '10px'};
`
const Option = styled.option`
  
`
const AmountContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 200px;
    
    margin: 10px 0;
    ${Mobile({
  flexDirection: 'column',
  gap: '20px',

})}
`
const Amount = styled.input`
    width: 60px;
    border: 1px solid lightgray;
    height: 40px;
    padding-left: 10px;
    font-weight: 800;
    border-radius: 5px;
    outline: none;
    margin: 0 10px 0 0 ;
    ${Mobile({
  textAlign: 'center',
  padding: '0'

})}
`
const AddCartButton = styled.button`
  color: white;
  background: teal;
  padding: 1rem .5rem;
  border-radius: 5px;
  cursor: pointer;
`
const ProductInfoTitle = styled.p`
  font-size: 20px;
  margin:20px 0 ;
  font-weight: bold;
`
const ProductInfo = styled.p`
  width: 80%;
  color: #000000ba;
  line-height: 1.75rem;
`
export const ProductDetails = (item) => {
  const { products } = useSelector((state) => state.cart);
  const [chooseColor, setChooseColor] = useState('')
  const [chooseSize, setChooseSize] = useState('')
  const [chooseAmount, setChooseAmount] = useState(1)
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const { title, img, price, size, inStock, color } = product;
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_SERVER_URL}/api/product/find/${id}`)
      setProduct(res.data)
    }
    getData();
  }, [location, id])
  // console.log({chooseColor,chooseSize,chooseAmount})
  const handelClick = () => {
    dispatch(
      addProduct(
        {
          ...product,
          chooseSize,
          chooseAmount,
          chooseColor
        }
      )
    )
  }
  return (
    <Container>
      <Navbar />
      {/* {ViewProduct.map((item) => (
        <ProductContainer>
          <Left>
            <MainImg src={item.img} />
            item.images[selectedPhoto].src
            <SecondaryImgContainer>
              {item.images.map((item)=>(
                <Image src={item.src} position="secondary" />
                // onClick={()=>setSelectedPhoto(item.index)}
              ))}
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
      ))} */}
      <ProductContainer>
        <Left>
          <MainImg src={img} />
        </Left>
        <Right>
          {/* <Department>{prodcut.department}</Department> */}
          <ProductTitle>{title}</ProductTitle>
          {inStock && <ProductInfo>In Stock</ProductInfo>}
          <Price>{price}$</Price>


          <OptionContainer type='color' onChange={(e) => setChooseColor(e.target.value)}>
            <Option disabled selected>select color</Option>
            {color?.map(item => (
              <Option value={item} key={item}>{item}</Option>
            ))
            }
          </OptionContainer>

          <OptionContainer onChange={(e) => setChooseSize(e.target.value)} >
            <Option disabled selected>select size</Option>
            {size?.map(item => (
              <Option value={item} key={item}>{item}</Option>
            ))}
          </OptionContainer>
          <AmountContainer>
            <Amount type='number' placeholder='0' min={0} onChange={(e) => setChooseAmount(e.target.value)} />
            <AddCartButton onClick={handelClick}>Add to cart</AddCartButton>
          </AmountContainer>
          <ProductInfoTitle>Product Details</ProductInfoTitle>
          <ProductInfo>Train like a professional. Relax like a champion. This football jersey shows off a clean, classic design with an adidas Badge of Sport on the chest. Moisture-absorbing AEROREADY will keep you dry and cool whether you're playing a kickabout in the park or enjoying a night out on the town. Made with 100% recycled materials, this product represents just one of our solutions to help end plastic waste.</ProductInfo>
        </Right>
      </ProductContainer>
      <NewArrival />
      <NewsLetter />
      <Footer />
    </Container>
  )
}
