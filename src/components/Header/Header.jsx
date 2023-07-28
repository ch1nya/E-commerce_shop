import React, { useEffect } from 'react'
import s from '../../styles/Header.module.css'
import { ROUTES } from '../../utils/routes'
import { Link, useNavigate } from 'react-router-dom'
import LOGO from "../../images/LOGOP.svg"
import logo from "../../images/logo.svg"
import AVATAR from '../../images/avatar.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { toggleForm } from '../../features/user/userSlice'
import { useState  } from 'react'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
    const {currentUser} = useSelector(({user})=>user)
  
  const [values, setValues] = useState({
    name:'Guest',
    avatar: AVATAR
  })
  
  useEffect(()=>{
    if(!currentUser) return

    setValues(currentUser)
  },
  [currentUser])

    const handleClick = () =>{
    if (!currentUser) dispatch(toggleForm(true)); 
    else navigate(ROUTES.PROFILE) 
  }

  
    return (
    <div className={s.header}>
        <div className={s.logo}>
            <Link to={ROUTES.HOME}>
                {/* <img src={LOGO} alt="logo" /> */}
                <img src={logo} alt="logo" />  
            </Link>
        </div>

        <div className={s.info}>
            <div className={s.user} onClick={handleClick}>
                <div 
                    className={s.avatar} 
                    style={{backgroundImage: `url(${values.avatar})`  }} 
                />
                <div className={s.username }>{values.name}</div>
            </div>

            <form className={s.form}>
                <div className={s.icon}>
                    <svg className='icon'>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
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

            {false && <div className={s.box}></div>}
        </form>

        <div className={s.account}>
            <Link to={ROUTES.HOME} className={s.favourites}>
                <svg className={s['icon-fav']}>
                    <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
                </svg> 
            </Link>

            <Link to={ROUTES.CART} className={s.cart}>
                <svg className={s['icon-cart']}>
                    <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
                </svg>
                <span className={s.count}>99</span>
            </Link>
            

        
        </div>
        </div>
    </div>
  )
}

export default Header