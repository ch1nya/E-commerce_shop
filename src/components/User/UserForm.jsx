import React from 'react'
import UserSignUpForm from './UserSignUpForm'
import s from '../../styles/User.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { toggleForm } from '../../features/user/userSlice'
import UserLoginForm from './UserLoginForm'
import { toggleFormType } from '../../features/user/userSlice'

const UserForm = () => {
    const dispatch = useDispatch()
    const {showForm, formType} = useSelector(({user})=>user)
    
    const closeForm = () => dispatch(toggleForm(false))
    const toggleCurrentFormType = (type) => dispatch(toggleFormType(type))

    return showForm ? (
        <>
            <div className={s.overlay} onClick={closeForm}/>
            {formType === 'signup' ? 
            <UserSignUpForm 
            toggleCurrentFormType={toggleCurrentFormType} 
            closeForm={closeForm}/> : 
            <UserLoginForm      
            toggleCurrentFormType={toggleCurrentFormType} 
            closeForm={closeForm}/>}
        </>
    ) : (
    <></>
    )
}

export default UserForm