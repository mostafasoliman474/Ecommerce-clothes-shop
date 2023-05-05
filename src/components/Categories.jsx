import React from 'react'
import { FirstCategory, SecondCategory } from '../Data'
import { Category } from './Category'
import { Category2 } from './Category2'
import styled from 'styled-components'
const Container=styled.div`
    display: flex;
    flex-direction: row;
    height: 90vh;
    width: 100%;
    margin: auto;
    justify-content: space-between;
    padding: 0 50px;
    flex-direction:column;
    
`
const FirstCat=styled.div`
    flex:2;
    display:flex;
    flex-direction:row;
`
const SecondCat=styled.div`
    flex:1.5;
    display:flex;
    flex-direction:row;
`
export const Categories = () => {
  return (
    <Container>
      <FirstCat>
        {FirstCategory.map((item)=>(
            <Category item={item} key={item.id}/>
        ))}
        
      </FirstCat>
      <SecondCat>
        {SecondCategory.map((item1)=>(
          <Category2 item1={item1} key1={item1.id1}/>
        ))}
      </SecondCat>
    </Container>
  )
}
