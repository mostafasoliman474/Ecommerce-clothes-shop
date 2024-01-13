
import styled from 'styled-components'
import { Mobile } from '../Responsive'

const Container=styled.div`
width: 100vw;
height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
    background-size: cover;
`
const Wrapper=styled.div`
  width: 50%;
  background-color: white;
  padding :20px;
      ${Mobile({
        width:'90%',
        display:'flex',
        flexDirection:'column'
      })}
`

const Form=styled.div`
  display: flex;
  flex-wrap:wrap;
  ${Mobile({
       
        display:'grid',
        
  })}
`

const Title=styled.h1`
margin-bottom:20px;
font-weight: 400;
`

const Input=styled.input`
  width: 48%;
  height: 50px;
  padding-left: 10px;
  background: white;
  margin: 10px 10px 10px 0;
  border-radius: 2px;
  border: 1px solid lightgray;
  outline: none;
  font-weight: 400;
  font-size: 18px;
  ${Mobile({
        width:'90%',
        
  })}
  
`
const Agreement=styled.p`
font-size: 16px;
font-weight: 400;
margin: 10px 0;
`

const Button=styled.button`
  width: 30%;
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
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
              <Input placeholder='First Name'/>
              <Input placeholder='Last Name'/>
              <Input placeholder='UserName'/>
              <Input placeholder='Email'/>
              <Input placeholder='Password'/>
              <Input placeholder='Confirm Password'/>
              <Agreement>
                  By creating an account, I consent to the processing of my personal
                  data in accordance with the <b>PRIVACY POLICY</b>
              </Agreement>
              <Button>CREATE</Button>
          </Form>
        </Wrapper>
    </Container>
  )
}
export default Register;