import { useEffect, useState } from 'react'


const useAuth = () => {

  const [login, setLogin] = useState({})


  useEffect(() => {

    const login = localStorage.getItem('login')

    if (login) {
        setLogin(login)
    } else {
        setLogin(null)
    }
  }, [])

  return {
    login
  }
}

export default useAuth