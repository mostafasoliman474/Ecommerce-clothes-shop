import { CloseOutlined, LocalMallOutlined, MenuOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import img from '../asetess/logo.png'
import { Link } from 'react-router-dom'
import { Mobile } from '../Responsive'
import { useState } from 'react'
const Container = styled.div`
  height: 70px;
  background-color: #E3E6F3;
  box-shadow: 0 5px 10px rgba(0,0,0,0.08);
  position: fixed;
  width: 100%;
  z-index: 100;
`
const Logo = styled.img`
  
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
   
`
const RightDesktop = styled.div`
  flex: 1;
  padding-left:40px;
  display:flex;
  justify-content: center;
  align-items: center;
  ${Mobile({
  display: 'none'
})}
`
const RightMobile = styled.div`
  flex: 1;
  padding-left:40px;
  display: none;
  justify-content: center;
  ${Mobile({
  display: 'flex'
})}
`
const Left = styled.div`
  flex: 1;
  margin-left: 50px;
`
const MenuItemCart = styled.a`
  display: inline-block;
  position: relative;
  font-weight: 600;
  cursor: pointer;
  margin-right: 40px;
  &:after{
    content: "";
    position: absolute;
    background-color: teal;
    height: 2px;
    width: 0%;
    transform: translateX(-50%);
    left: 50%;
    bottom: 0;
    transition: .35s ease;
  }
  &:hover:after{
    width: 110%;
    
  }
  &:hover{
    color: teal;
  }
`
const Links = styled.a`
    display: inline-block;
    position: relative;
    font-weight: 600;
    cursor: pointer;
    margin-right: 40px;
  
    &:after{
      content: "";
      position: absolute;
      background-color: teal;
      height: 2px;
      width: 0%;
      transform: translateX(-50%);
      left: 50%;
      bottom: 0;
      transition: .35s ease;
    }
    &:hover:after{
      width: 110%;
      
    }
    &:hover{
      color: teal;
    }
    ${Mobile({
      marginRight: '0'
    })}
`
const PopMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  height: 100%;
  z-index: 1;
  overflow-x: hidden;
  transition: 1s;
  padding-top: 60px;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 36px;
  background-color: white;
  position: fixed;
  font-size: 22px;
  color:black;
  
`

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to='/'>
          <Logo src={img} />
          
          </Link>

        </Left>
        <RightDesktop>
          {/* {toggle } */}
          <Link to='/' style={{ "color": "inherit" }}>
            <Links>Home</Links>
          </Link>

          <Link to='/shop' style={{ "color": "inherit" }}>
            <Links>Shop</Links>
          </Link>

          <Link to='/blog' style={{ "color": "inherit" }}>
            <Links>Blog</Links>
          </Link>

          <Link to='/about' style={{ "color": "inherit" }}>
            <Links>About</Links>
          </Link>

          <Link to='/contactus' style={{ "color": "inherit" }}>
            <Links>Contact</Links>
          </Link>


          <Link to='/cart' style={{ "color": "inherit" }}>
            <MenuItemCart name='cart'>
              <Badge badgeContent={0} color="primary">
                <LocalMallOutlined />
              </Badge>
            </MenuItemCart>
          </Link>

        </RightDesktop>
        <RightMobile version='mobile'>
          <MenuOutlined onClick={() => setToggle((prev) => !prev)} />
        </RightMobile>


        <PopMenu apper={toggle} style={{ width: `${toggle ? '100%' : '0'}` }}>
          <CloseOutlined onClick={() => { setToggle((prev) => !prev) }} />
          <Link to='/' style={{ "color": "inherit" }}>
            <Links>Home</Links>
          </Link>

          <Link to='/shop' style={{ "color": "inherit" }}>
            <Links>Shop</Links>
          </Link>

          <Link to='/blog' style={{ "color": "inherit" }}>
            <Links>Blog</Links>
          </Link>

          <Link to='/about' style={{ "color": "inherit" }}>
            <Links>About</Links>
          </Link>

          <Link to='/contactus' style={{ "color": "inherit" }}>
            <Links>Contact</Links>
          </Link>
          <Link to='/cart' style={{ "color": "inherit" }}>
            <Links>Cart</Links>
          </Link>

        </PopMenu>

      </Wrapper>
    </Container>
  )
}
