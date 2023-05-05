import React from 'react'
import styled from 'styled-components'
import { Announcement } from '../components/Announcement'
import { Categories } from '../components/Categories'
import { Features } from '../components/Features'
import { Navbar } from '../components/Navbar'
import { NewArrival } from '../components/NewArrival'
import { Offer } from '../components/Offer'
import { Products } from '../components/Products'
import { NewsLetter } from '../components/NewsLetter'
import { Footer } from '../components/Footer'
const Container=styled.div`
  
`
export const Home = () => {
  return (
    <Container>
      <Navbar />
      <Announcement/>
      <Features/>
      <Products/>
      <Offer/>
      <NewArrival/>
      <Categories/>
      <NewsLetter/>
      <Footer/>
    </Container>
  )
}
