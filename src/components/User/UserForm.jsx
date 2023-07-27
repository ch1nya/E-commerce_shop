import React from 'react'
import UserSignUpForm from './UserSignUpForm'
import s from '../../styles/User.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { toggleForm } from '../../features/user/userSlice'

const UserForm = () => {
    const dispatch = useDispatch()
    const {showForm} = useSelector(({user})=>user)
    
    const closeForm = () => dispatch(toggleForm(false))

    return showForm ? (
        <>
            <div className={s.overlay} onClick={closeForm}/>
            <UserSignUpForm closeForm={closeForm}/>
        </>
    ): (
    <></>
    )


}

export default UserForm