import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'

const LoginContainer = () => {
    return (
        <div>
            <Header />
            <h1>Login</h1>
            <Link to="/auth/register">Register</Link>
        </div>
    )
}

export default LoginContainer 