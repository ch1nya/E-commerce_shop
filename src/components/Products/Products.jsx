import React from 'react'
import s from '../../styles/Products.module.css'
import { Link } from 'react-router-dom'


const Products = ({title, products = [], style={}, amount }) => {
  const list = products.filter((_,i)=> i<amount)
    return (
    <section className={s.products} style={style}>
        {title && <h2>{title}</h2>}

        <div className={s.list}>
        {list.map(
            ({id,images,title, categories:{name:cat} = 'product', price}) => (
            <Link to={`/products/${id }`} className={s.product} key={id}>
                <div className={s.image} 
                     style={{  backgroundImage: `url(${images[0]})`  }}/>
        <div className={s.wrapper}>
            <h3 className={s.title}>{title}</h3>
            <div className={s.cat}>{cat}</div>
            <div className={s.info}>
                <div className={s.prices}>
                    <div className={s.price}>{price}￥</div>
                    <div className={s.oldPrices}>
                        {Math.floor(price*0.8)}￥
                    </div>
                </div>
            
                <div className={s.purchases}>
                    {Math.floor(Math.random()*40+3)} purchased
                </div>
            </div>
        </div>
    </Link>
        ))}
    </div>
        
    </section>
  )
}

export default Products