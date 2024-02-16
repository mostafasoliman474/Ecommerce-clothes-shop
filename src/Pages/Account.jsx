import React, { useState } from 'react'
import styled from "styled-components"
import { Navbar } from "../components/Navbar"
import { useSelector } from 'react-redux'
import LogoutButton from '../components/LogoutButton'
// import {Footer} from "../components/Footer"
const Container = styled.div`
  
`
const AccountContainer = styled.div`
    bottom: 0;
    top: 0;
    right: 0;
    position: absolute;
    left: 0;
    margin: auto;
    background-color: #9e9fa0;
    height: 60%;
    width: 80%;
    border-radius: 10px;
    padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`
const Title=styled.h1`
  
`
const Info=styled.h1`
  
`
const EditButton=styled.input`
  font-size:20px;
  padding: 10px 30px;
  border-radius: 10px;
  cursor: pointer;
`
const Account = () => {
  const {currentUser}=useSelector((state)=>state.user)
  const [EditMenu, setEditMenu] = useState(false)
  console.log(EditMenu)
  return (
    <Container>
      <Navbar />
      {EditMenu?
      (
        <AccountContainer>
        <Title>Account Info</Title>
        <Info>Full name : {currentUser.username}</Info>
        <Info>Email :{currentUser.email} </Info>
        <Info>Mobile Phone : 01110734104</Info>
        <Info>password : ********* </Info>
        <EditButton type='submit' value={'Save changes'} onClick={()=>setEditMenu((prev)=>!prev)}/>
          <LogoutButton/>
      </AccountContainer>
      ):(
        <AccountContainer>
        <Title>Account Info</Title>
        <Info>Full name : {currentUser.username}</Info>
        <Info>Email :{currentUser.email} </Info>
        <Info>Mobile Phone : 01110734104</Info>
        <Info>password : ********* </Info>
        <EditButton type='submit' value={'Edit'} onClick={()=>setEditMenu((prev)=>!prev)}/>
        <LogoutButton/>
      </AccountContainer>
      )}
      {/* <Footer/> */}
    </Container>
  )
}

export default Account