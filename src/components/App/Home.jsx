import React from 'react'
import Poster from '../Poster/Poster'
import Products from '../Products/Products'
import { useSelector } from 'react-redux'
import s from '../../styles/Home.module.css'
import Categories from '../Categories/Categories'
import Banner from '../Banner/Banner'

const Home = () => {
const {products, categories}  = useSelector((state)=>state)

  return (
      <>
        <Poster />
        <Products  products={products.list} amount={5} title='Trending'/>
        <Categories  products={categories.list} amount={5} title='Worth to see'/>
        <Banner />
      </>
  )
}

export default Home