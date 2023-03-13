import { Routes, Route, Navigate } from 'react-router-dom'

import Login from '../Pages/Login/Login'
import Test from '../Pages/Test/Test'
import ProtectedRoute from './ProtectedRoute'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='login'/>} />
        <Route path='login' element={<Login />}/>

        <Route path='/*' element={<ProtectedRoute />}>
            <Route path='test' element={<Test />} />
        </Route>
    </Routes>
  )
}

export default Routers