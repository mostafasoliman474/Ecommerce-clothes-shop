import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Container=styled.button`
    ${props=>props.styling}
    cursor: pointer;
`
const CustomButton = ({ text, styling, destination }) => {
    return (
        <Link to={destination} style={{cursor:"pointer"}}>
            <Container styling={styling}>
                {text}
            </Container>
        </Link>
        
    )
}

export default CustomButton