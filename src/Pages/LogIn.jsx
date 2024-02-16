import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Mobile } from "../Responsive"
import { useDispatch, useSelector } from "react-redux"
import { fetching } from "../redux/api"
// import { login } from "../redux/api"
// import { useDispatch, useSelector } from "react-redux"


const Container=styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      rgba(153, 153, 153, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
      center;
    background-size: cover;
`
const Wrapper=styled.div`
    width: 25%;
    background-color: white;
    padding :20px;
    border-radius: 2px;
   ${Mobile({
    width:'90%'
   })}
`

const Title=styled.h1`
    margin-bottom:20px;
    font-weight: 400;
`

const Form=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px ;
`
const Input=styled.input`
    flex: 1;
    min-width: 40%;
    padding: 10px;
    background: white;
    margin: 10px 10px 10px 0;
    border-radius: 2px;
    border: 1px solid lightgray;
    outline: none;
    font-weight: 400;
    font-size: 18px;
    border-radius:10px;
`

const Button=styled.button`
    width: 40%;
    padding:1rem 0 ;
    text-align: center;
    background-color: teal;
    color:lightgray ;
    font-size: 16px;
    font-weight: 600;
    border-radius: 2px;
    cursor: pointer;
    border: 1px solid teal;
    margin: 10px 0;
    &:hover{
        background-color: lightgray;
        color: teal;
        border:1px solid teal;
    }
    &:disabled{
        cursor: not-allowed;
    }
`

const Navigate=styled.a`
    margin-top: 5px;
    letter-spacing: 1px;
    cursor: pointer;
`
const ErrorMassage=styled.p`
    color: red;

`

const LogIn = () => {
    
    const {isFetching,error}=useSelector((state)=>state.user)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    console.log({username,password})
    const dispatch=useDispatch();
    const handelClick=(e)=>{
        e.preventDefault();
        fetching(dispatch,{username,password})
    }
    
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder='user name' type="text" onChange={(e)=>setUsername(e.target.value)}/>
                <Input placeholder='password' type="password" onChange={(e)=>setPassword(e.target.value)}/>
                <Button onClick={handelClick} disabled={isFetching}>LOGIN</Button>
                {error && <ErrorMassage>Something went wrong!!</ErrorMassage>}
                {/* onClick={handelClick} */}
                <Navigate>Forgotten password?</Navigate>
                <Link to='/register' style={{textDecoration:'none',color:'#000000'}}>
                <Navigate >Create New Account</Navigate>
                </Link>
                
            </Form>
        </Wrapper>
    
    </Container>
  )
}
export default LogIn;