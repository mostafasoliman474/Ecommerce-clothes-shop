import React from 'react'
import styled from 'styled-components'
import { FeaturesData } from '../Data'
import { Feature } from './Feature'
import { Mobile } from '../Responsive'

const Container=styled.div`
    
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #fffefe;
    padding: 0 25px;
    flex-wrap: wrap;
    margin: 20px 0;
    ${Mobile({
      justifyContent:'center',
      padding:'0',
      
    })}
`
export const Features = () => {
  return (
    <Container>
        {FeaturesData.map((item)=>(
                <Feature item={item} key={item.id} />
        ))}
    </Container>
)}
