import { useLocation } from 'react-router-dom'
import Routers from '../../Routers/Routers'
import Header from '../Header/Header'

const Layout = () => {

  const location = useLocation()

  return (
   <>
      {
        location.pathname.startsWith('/test') ? <Header /> : ''
      }
   <div>
        <Routers />
    </div>
   </>
  )
}

export default Layout