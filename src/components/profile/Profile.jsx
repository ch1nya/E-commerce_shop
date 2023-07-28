import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../features/user/userSlice';
import s from '../../styles/Profile.module.css'
import { useState } from 'react';

const Profile = () => {
    const dispatch = useDispatch()
    const {currentUser} = useSelector(({user}) => user)

    const [values, setValues] = useState({
        name:'',
        email: '',
        password: '',
        avatar: '',
      });

      useEffect(()=>{
        if (!currentUser) return
        setValues(currentUser)
      },[currentUser])

    const handlechange = ({target:{value, name}}) => {
      setValues({...values, [name]: value})
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const isNotEmpty = Object.values(values).some((val)=>val)
        if (!isNotEmpty) return
        dispatch(updateUser(values))
      };

  return (
    <section className={s.profile}>
        {!currentUser ? (
            <span>You need to log in </span>
        ) : (
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

                <button type='submit' className={s.submit}>Update</button>
      </form>
            
        )}
    </section>
  )
}

export default Profile