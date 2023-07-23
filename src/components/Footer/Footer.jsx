import React from 'react'
import s from '../../styles/Footer.module.css'
import { ROUTES } from '../../utils/routes'
import LOGO from "../../images/LOGOP.svg"
import logo from "../../images/logo.svg" 
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className={s.footer}>
      <div className={s.logo}>
          <Link to={ROUTES.HOME}>
              {/* <img src={LOGO} alt="logo" /> */}
              <img src={logo} alt="logo" />  
          </Link>
        </div>
        <div className={s.rights}>
          Developed by <a href="https://t.me/nasferatum"
                        target='_blank'
                        rel='noreferrer'
                        > Ch1nya</a>
        </div>

        <div className={s.socials}>
        <a href="https://instagram.com" target='_blank' rel='noreferrer'></a>
          <svg className='icon'>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
          </svg>    
        
          
          <a href="https://facebook.com" target='_blank' rel='noreferrer'></a>
          <svg className='icon'>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
          </svg>  

          <a href="https://youtube.com" target='_blank' rel='noreferrer'></a>
          <svg className='icon'>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
          </svg>  
        </div>
    </section>
  )
}

export default Footer