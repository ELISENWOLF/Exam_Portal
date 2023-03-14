import React from 'react'
import { Container, Row } from 'reactstrap'
import { motion } from 'framer-motion'

import './header.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear()
        navigate('/')
    }

  return (
    <header className='header'>
        <Container>
            <Row>
                <div className="nav_wrapper">
                    <div className="logo">
                        <h1>Online Exam Portal</h1>
                    </div>
                    <div className="nav_icons">
                        <motion.button whileHover={{scale:1.1}} className='log_btn' onClick={logout}>Logout</motion.button>
                    </div>
                </div>
            </Row>
        </Container>
    </header>
  )
}

export default Header