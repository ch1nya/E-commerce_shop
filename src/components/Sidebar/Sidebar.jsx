import React from 'react'
import s from '../../styles/Sidebar.module.css'
import { Link, NavLink } from 'react-router-dom'


const Sidebar = () => {
  return (
    <section className={s.sidebar}>
      <div className={s.title}>CATEGORIES</div>
      <nav>
        <ul className={s.menu}>
          <li>
            <NavLink to={`/categories/${1}`}> 
            {/* // here is supposed to an ID for a category */}
              Link
            </NavLink>
          </li>
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