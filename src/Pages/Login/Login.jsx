import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Form,FormGroup } from 'reactstrap'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup' 

import Helmet from '../../Components/Helmet/Helmet'
import userSchema from '../../Components/Validate/validation'
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

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(userSchema),
    })

    const signIn = (e) => {
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
                    
                    <Form className='auth_form' onSubmit={handleSubmit(signIn)}>
                    <FormGroup className='form_group'>
                      <input
                        type='text'
                        placeholder='email'
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        ref={register}
                      />
                    </FormGroup>
                    <p className='error'>{errors.email?.message}</p>
                    <FormGroup className='form_group'>
                      <input
                        type="password"
                        placeholder='Enter password'
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        ref={register}
                      />
                    </FormGroup>
                    <p className='error'>{errors.password?.message}</p>
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

                    <motion.button type='submit' id='submit' whileTap={{ scale: 1.1 }} className="buy_btn auth_btn">Login</motion.button>
                  </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>
  )
}

export default Login