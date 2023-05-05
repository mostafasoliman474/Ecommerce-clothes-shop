import { LocalMallOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import img from '../asetess/logo.png'
//#222

const Container=styled.div`
    height: 70px;
    background-color: #E3E6F3;
    box-shadow: 0 5px 10px rgba(0,0,0,0.08);
    position: fixed;
    width: 100%;
    z-index: 100;
`
const Wrapper=styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
`
const Right=styled.div`
    flex: 1;
    padding-left:40px;
    display: flex;
    justify-content: center;

`
const Left=styled.div`
    flex: 1;
    margin-left: 50px;
`
const Logo=styled.img`

`
const Link=styled.a`
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
export const Navbar = () => {
  return (
    <Container>
        <Wrapper>
          <Left>
            <Logo src={img}>
              
            </Logo>
          </Left>
          <Right>
            
            <Link>Home</Link>
            <Link>Shop</Link>
            <Link>Blog</Link>
            <Link>About</Link>
            <Link>Contact</Link>
            <Link>
            <Badge badgeContent={4} color="primary">
              <LocalMallOutlined/>
            </Badge>
            </Link>
          </Right>
        </Wrapper>
    </Container>
  )
}
