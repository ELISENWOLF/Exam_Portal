import { useEffect, useState } from 'react'


const useAuth = () => {

  const [login, setLogin] = useState({})


  useEffect(() => {

    const login = localStorage.getItem('login')
    const user = localStorage.getItem('username')

    if (login) {
        setLogin(user)
    } else {
        setLogin(null)
    }
  }, [])

  return {
    login
  }
}

export default useAuth