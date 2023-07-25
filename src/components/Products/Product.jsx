import React, { useEffect, useState } from 'react'
import s from '../../styles/Product.module.css'
import { ROUTES } from '../../utils/routes'
import { Link } from 'react-router-dom'


const SIZES = ['S','M','L','XL','XXL',]
const COLORS = ['Black','White','Red','Blue','Yellow',]

const Product = ({title, price, images,description}) => {
  
    const [currentImage, setCurrentImage] = useState()
    const [currentSize, setCurrentSize] = useState()
    const [currentColor, setCurrentColor] = useState()


    useEffect(()=>{
        if(!images.length) return
        setCurrentImage(images[0])
     },[images])

    return(
    <section className={s.product}>
        <div className={s.images}>
            <div className={s.current}
                 style={{backgroundImage: `url(${currentImage})`}}/>
                  <div className={s['images-list']}>
                  {images.map((image,i)=>(
                    <div 
                        key={i}
                        className={s.image}
                        style={{backgroundImage: `url(${image})`}}
                        onClick={()=>setCurrentImage(image)}
                    />
                  )
                  )}
                  </div> 
        </div>
        <div className={s.info}>
            <h1 className={s.title}>
                {title}
            </h1>
            <div className={s.price}>
                {price}￥
            </div>
            <div className={s.color}>
                <span>Color:</span> Black
                <div className={s.list}>
                    {/* {COLORS.map(color=>(
                        <div onClick={()=>setCurrentColor(color)} className={`${s.color} ${currentColor=== color ? s.active : ''}`} key={color}    >
                         {color}
                         
                    ))}     */}

                </div> 
            </div>
            <div className={s.sizes}>
                <span>Sizes:</span>
                <div className={s.list}>
                    {SIZES.map(size=>(
                        <div onClick={()=>setCurrentSize(size)} className={`${s.size} ${currentSize=== size ? s.active : ''}`} key={size}    >
                         {size}
                        </div>
                    ))}    
                </div> 
            </div>
            <p className={s.description}>{description}</p>

            <div className={s.actions}>
                <button className={s.add} disabled={!currentSize}>Add to card</button>
                <button className={s.favourite}>Add to favourite</button>
            </div>
            <div className={s.bottom}>
                    <div className={s.purchase}>{Math.random()*1000}</div>
                    <Link to={ROUTES.HOME}>Return to store</Link>    
            </div>
        </div>
    </section>
  )
}

export default Product