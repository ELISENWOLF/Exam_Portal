import { Routes, Route, Navigate } from 'react-router-dom'
import ExamSummary from '../Pages/ExamSummary/ExamSummary'

import Login from '../Pages/Login/Login'
import Test from '../Pages/Test/Test'
import ProtectedRoute from './ProtectedRoute'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='login'/>} />
        <Route path='login' element={<Login />}/>

        <Route path='/*' element={<ProtectedRoute />}>
            <Route path='test' element={<Test name=" "/>} />
        </Route>
        <Route path='submit' element={<ExamSummary />}/>
    </Routes>
  )
}

export default Routers