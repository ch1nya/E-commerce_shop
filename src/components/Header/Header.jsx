import React from 'react'
import s from '../../styles/Header.module.css'
import { ROUTES } from '../../utils/routes'
import { Link } from 'react-router-dom'
import LOGO from "../../images/LOGOP.svg"
import logo from "../../images/logo.svg"
import AVATAR from '../../images/avatar.jpg'

const Header = () => {
  return (
    <div className={s.header}>
        <div className={s.logo}>
            <Link to={ROUTES.HOME}>
                <img src={LOGO} alt="logo" />
                {/* <img src={logo} alt="logo" /> // default logo */}  
            </Link>
        </div>

        <div className={s.info}>
        <div className={s.user}>
        <div className={s.avatar} style={{backgroundImage: `url(${AVATAR})`  }} />
        <div className={s.username }>Guest</div>
        <form className={s.form}>
            <div className={s.icon}>
                <svg className='icon'>
                    <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search}`} />
                </svg>    
            </div>
            <div className={s.input}>
                <input  type="search" 
                        name='search' 
                        placeholder='Search for anything...' 
                        autoComplete='off'
                        onChange={()=>{}}
                        value=''
                        />
            </div>
        </form>
        </div>
        </div>
    </div>
  )
}

export default Header