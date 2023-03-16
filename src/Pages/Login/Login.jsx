import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Form,FormGroup } from 'reactstrap'
import { motion } from 'framer-motion'

import Helmet from '../../Components/Helmet/Helmet'
import '../../Styles/login.css'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [subject, setSubject] = useState('')

    const navigate = useNavigate()

    const handleFilter = (e) => {
        const selectedValue = e.target.value
        if (selectedValue === "sports") {
            setSubject("sports")
        }
        if (selectedValue === "arts") {
            setSubject("arts")
        }
        if (selectedValue === "history") {
            setSubject("history")
        }
        if (selectedValue === "physics") {
            setSubject("physics")
        }
    }

    const signIn = (e) => {
        e.preventDefault()


        try{
            
            localStorage.setItem('email', email)
            localStorage.setItem('pwd', password)
            localStorage.setItem('sub', subject)

            const user = localStorage.getItem('email:')
            const pwd = localStorage.getItem('pwd:')
            const sub = localStorage.getItem('sub')

            if(user !== '' && pwd !== '' && sub !== '' ){
                localStorage.setItem('login', true)
                navigate('/test')
                
            }else {
                localStorage.setItem('login', false)
            }

        }catch(err){
            console.log(err.message);
        }
    }

  return (
    <Helmet title='Login'>
        <section>
            <Container>
                <Row>
                    <Col lg='4' className='m-auto text-center'>
                    <h3 className="fw-bold mb-4">Login</h3>
                    
                    <Form className='auth_form' onSubmit={signIn}>
                    <FormGroup className='form_group'>
                      <input
                        type="email"
                        placeholder='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                      />
                    </FormGroup>
                    <FormGroup className='form_group'>
                      <input
                        type="password"
                        placeholder='Enter password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                      />
                    </FormGroup>
                    <FormGroup className='form_group'>
                        <div className="filter_widget">
                            <select onClick={handleFilter}>
                                <option>Choose your Subject</option>
                                <option value="sports">Sports</option>
                                <option value="arts">Arts</option>
                                <option value="history">History</option>
                                <option value="physics">Physics</option>
                            </select>
                        </div>
                    </FormGroup>

                    <motion.button whileTap={{ scale: 1.1 }} className="buy_btn auth_btn">Login</motion.button>
                  </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>
  )
}

export default Login