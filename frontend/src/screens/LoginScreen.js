import React, {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import {Form,Button,Row,Col} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {login} from '../actions/userAction'
import FormContainer from '../components/FormContainer'
import { redirect } from 'express/lib/response'

const LoginScreen = ({location}) => {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const redirect = location.search ? location.search.split('=') : '/'
    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <FormContainer>
            <h1>Sign In</h1>
            <Form onSubmit={SubmitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='text' placeholder='Enter your Email'
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group controlId='Password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter the Password'
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>
                    Sign In
                </Button>
                <Row class='py-3'>
                    <Col>
                        New Customer ? {' '}
                        <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                            Register
                        </Link>
                    </Col>
                </Row>
            </Form>
        </FormContainer>
    )
}

export default LoginScreen
