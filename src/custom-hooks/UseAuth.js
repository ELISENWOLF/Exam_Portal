import { useEffect, useState } from 'react'


const useAuth = () => {

  const [login, setLogin] = useState({})


  useEffect(() => {

    const login = localStorage.getItem('login')
    const email = localStorage.getItem('email')

    if (login) {
        setLogin(email)
    } else {
        setLogin(null)
    }
  }, [])

  return {
    login
  }
}

export default useAuth