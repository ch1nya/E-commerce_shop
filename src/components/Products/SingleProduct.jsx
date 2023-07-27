import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetProductQuery } from '../../features/api/apiSlice';
import {ROUTES} from '../../utils/routes'
import Product from './Product';
import s from '../../styles/Product.module.css'
import Products from './Products';
import { useDispatch, useSelector } from 'react-redux';
import { getRelatedProducts } from '../../features/products/productsSlice';

const SingleProduct = () => {
  const dispatch = useDispatch()
  const {id } = useParams();
  const navigate  = useNavigate();
  const  {related} = useSelector(({products})=> products)


  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({id});
  
  
  useEffect(()=>{
    if(data) {
      dispatch(getRelatedProducts(data.category.id))
    }
  },[data,dispatch])

  useEffect(()=>{
    if(!isFetching && !isLoading && !isSuccess){
        navigate(ROUTES.HOME)
    }
  
},[isLoading,isFetching,isSuccess,      ])

    return !data ? (<section className={s.preloader}>Loading...</section>
    ) : (
    <>
    <Product {...data}/>
    <Products products={related} amount={5}  titile ='Related products'/>  
    </>
    
  )
}

export default SingleProduct