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
import CustomButton from '../components/CustomButton'
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
  alignItems: "center",
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
  width: "90%"
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
  padding: '0',

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
const PopUpMenuContainer = styled.div`
  /* position: ; */
  position: fixed;
  max-width:550px;
  max-height: 380px;
  background-color: rgb(0, 128, 128);
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  ${Mobile({
    position:"fixed",
    width: "100%",
    maxHeight:"800px",
    zIndex:"100",
    borderRadius:"0px"
})}
`
const PopUpMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px; 
  ${Mobile({
    flexDirection:"column"
  })}
`
const PopMenuTitle = styled.span`
  display:flex;
  align-items:center;
  width:90%;
  height:30px; 
  background-color:white; 
  color:rgb(3, 74, 74);
  border-radius: 10px;
  padding: 10px;
  font-weight: 800 ;
  justify-content: center;
`
const ProductCode = styled.p`
  font-size: 14px;
  opacity: .8;
  color: white;
  font-weight: 700;
`
const COLOR=styled.div`
  background-color: yellow;
  padding: 1rem;
  border-radius:50%;
`
const ImageProduct=styled.img`
  border-radius: 10px;
  width: 40%;
`
const ButtonsContainer=styled.div`
  display: flex;
  width: 100%;
  gap: 40px;
  align-items: center;
  justify-content: center;
  ${Mobile({
    flexDirection:"column",
    gap:"5px"

  })}
`
const Total=styled.p`
  color: teal;
  font-weight: 900;
  color: white;
`
const ChoosinInfo=styled.p`
  font-weight: 800;
  color: white;
`
const ProductDetailsContainer= styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  ${Mobile({
    flexDirection:"column"
  })}
`
const InfoContainer=styled.div`
  ${Mobile({
    flexDirection:"column"
  })}
`
export const ProductDetails = (item) => {
  const ButtonStyled="color:rgb(3, 74, 74);border-radius:10px;background:white;padding:10px;font-weight:600;&:hover{color:white;background:#34b31483}"
  const { products } = useSelector((state) => state.cart)
  const [popMenu, setPopMenu] = useState(false)
  console.log(popMenu)
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
    (chooseAmount >0 && chooseSize && chooseColor) &&dispatch(
      addProduct(
        {
          ...product,
          chooseSize,
          chooseAmount,
          chooseColor
        }
      )
    )&&setPopMenu((prev)=>!prev)
  }
  return (
    <Container>
      <Navbar />
      <ProductContainer>
        <Left>
          <MainImg src={img} />
        </Left>
        <Right>
          {/* <Department>{prodcut.department}</Department> */}
          <ProductTitle>{title}</ProductTitle>
          {inStock && <ProductInfo>In Stock</ProductInfo>}
          <Price>{price}$</Price>
          <OptionContainer type='color' onChange={(e) => setChooseColor(e.target.value)} required>
            <Option disabled selected>select color</Option>
            {color?.map(item => (
              <Option value={item} key={item}>{item}</Option>
            ))
            }
          </OptionContainer>

          <OptionContainer onChange={(e) => setChooseSize(e.target.value)} required>
            <Option disabled selected>select size</Option>
            {size?.map(item => (
              <Option value={item} key={item}>{item}</Option>
            ))}
          </OptionContainer>
          <AmountContainer>
            <Amount type='number' placeholder='0' min={0} onChange={(e) => setChooseAmount(e.target.value)} required/>
            <AddCartButton onClick={handelClick}>Add to cart</AddCartButton>
          </AmountContainer>
          <ProductInfoTitle>Product Details</ProductInfoTitle>
          <ProductInfo>Train like a professional. Relax like a champion. This football jersey shows off a clean, classic design with an adidas Badge of Sport on the chest. Moisture-absorbing AEROREADY will keep you dry and cool whether you're playing a kickabout in the park or enjoying a night out on the town. Made with 100% recycled materials, this product represents just one of our solutions to help end plastic waste.</ProductInfo>
        </Right>
      </ProductContainer>

   
      {popMenu && 
      <>
        <span style={{ inset: "0", position: "absolute"}}></span>
        <PopUpMenuContainer>
          <PopMenuTitle>
            <p >Product added successfully</p>
          </PopMenuTitle>
          <PopUpMenu >
            <ProductDetailsContainer>
              <ImageProduct src={img}/>
              <InfoContainer>
                <ProductTitle style={{color:'white'}}>Nike T-shirt</ProductTitle>
                <ProductCode>Product code : 16954457 </ProductCode>
              </InfoContainer>
            </ProductDetailsContainer>
              <COLOR/>
            <ChoosinInfo>1</ChoosinInfo>
            <ChoosinInfo>400$</ChoosinInfo>
          </PopUpMenu>
          <Total>Total : {price*chooseAmount}$</Total>
          <ButtonsContainer>
              <CustomButton destination='/cart' text='View Cart' styling={ButtonStyled}/>
              <CustomButton destination='/cart' text='Checkout' styling={ButtonStyled}/>
              <CustomButton destination='/shop' text='Continue Shopping' styling={ButtonStyled}/>
          </ButtonsContainer>
        </PopUpMenuContainer>

        </>}
      <NewArrival />
      <NewsLetter />
      <Footer />
    </Container>
  )
}
