import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { logout } from '../redux/userReducer'
import { useNavigate } from 'react-router-dom'
const Button= styled.button`
    background-color: red;
    color: white;
    padding: 10px;
    cursor: pointer;
`

const LogoutButton = () => {
    const dispatch= useDispatch()
    const navigate= useNavigate()
    const handeLogout=()=>{
        dispatch(logout())
        navigate('/')
    }       
  return (
    <Button onClick={handeLogout}>Logout</Button>
  )
}

export default LogoutButton