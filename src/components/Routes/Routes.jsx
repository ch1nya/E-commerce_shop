import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from '../App/Home'

const AppRoutes = () => {
  return (
    <Routes>
        <Route index element={<Home />}/>    
    </Routes>
  )
}

export default AppRoutes