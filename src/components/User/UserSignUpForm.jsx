import React, { useState } from 'react'
import s from '../../styles/User.module.css'
import { useDispatch } from 'react-redux'
import { createUser } from '../../features/user/userSlice'



const UserSignUpForm = ({closeForm}) => {
  const dispatch = useDispatch()
  const [values, setValues] = useState({
    name:'',
    email: '',
    password: '',
    avatar: '',
  })

const handlechange = ({target:{value, name}}) => {
  setValues({...values, [name]: value})
}

const handleSubmit = (e) => {
  e.preventDefault()
  const isNotEmpty = Object.values(values).some((val)=>val)
  if (!isNotEmpty) return
  dispatch(createUser(values))
  closeForm()
}

  return (
    <div className={s.wrapper}>
      <div className={s.close} onClick={closeForm}>
        <svg className='icon'>
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
        </svg>
      </div>
    <div className={s.title}>Sign Up</div>

    <form className={s.form}  onSubmit={handleSubmit}>
      <div className={s.group}>
        <input type="email" 
               name="email" 
               placeholder='Your e-mail' 
               value={values.email} 
               autoComplete='off' 
               onChange={handlechange} required/>
      </div>

      <div className={s.group}>
        <input type="name" 
               name="name" 
               placeholder='Your name' 
               value={values.name} 
               autoComplete='off' 
               onChange={handlechange} required/>
      </div>

      <div className={s.group}>
        <input type="password" 
               name="password" 
               placeholder='Your password' 
               value={values.password}
               autoComplete='off' 
               onChange={handlechange} required/>
      </div>

      <div className={s.group}>
        <input type="avatar" 
               name="avatar" 
               placeholder='Your avatar' 
               value={values.avatar}
               autoComplete='off' 
               onChange={handlechange} required/>
      </div>
      
    <div className={s.link}>I already have an account</div>
    <button className={s.submit} type="submit">Create an account</button>
    </form>
    </div>
  )
}

export default UserSignUpForm