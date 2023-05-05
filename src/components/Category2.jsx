
import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
    flex:1;
    background-image:url(${props=>props.src});
    background-repeat: no-repeat;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 30px;
    background-size: cover;
    margin: 10px;
    cursor: pointer;
`
const HeadLine=styled.div`
    margin-bottom: 10px;
    font-size: 30px;
    font-weight: 700;
`
const Desc=styled.div`
    font-size: 14px;
    color: #f71515;
    font-weight: 600;
`
export const Category2 = ({item1}) => {
  return (
    <Container src={item1.img}>
        <HeadLine>{item1.headline}</HeadLine>
        <Desc>{item1.desc}</Desc>
    </Container>
  )
}
