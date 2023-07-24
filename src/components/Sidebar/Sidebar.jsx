import React from 'react'
import s from '../../styles/Sidebar.module.css'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Sidebar = () => {
  const {list} = useSelector(({categories})=>categories)

  return (
    <section className={s.sidebar}>
      <div className={s.title}>CATEGORIES</div>
      <nav>
        <ul className={s.menu}>
          {list.map(({id, name})=>(
            <li key={id}>
              <NavLink
              className={({isActive})=> `${s.link} ${isActive ? s.active : ''}` }
              to={`/categories/${id}`}>{name}</NavLink>
            </li>
          ))}
          
        </ul>
      </nav>
      <div className={s.footer}>
        <a href='/help' target='_blank' className={s.link}>Help</a>
        <a href='/terms' target='_blank' className={s.link} style={{textDecoration: "underline"}}>Terms and Conditions</a>
      </div>
    </section>
  )
}

export default Sidebar