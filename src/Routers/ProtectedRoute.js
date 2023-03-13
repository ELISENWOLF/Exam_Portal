import { Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import useAuth from '../custom-hooks/UseAuth'

const ProtectedRoute = () => {

  const { login } = useAuth()

  return login ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRoute