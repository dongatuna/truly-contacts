import React from "react"
import { Form, Button } from 'semantic-ui-react'
import Header from '../../components/Header'

const RegisterUI = () => {
    return (
        <div>
            <Header/>
            <Form>
                <Form.Field>
                    <label htmlFor="firstName">First Name</label>
                    <input placeholder="First Name" />
                </Form.Field>
                <Form.Field>
                    <label htmlFor="lastName">Last Name</label>
                    <input  placeholder="Last Name" />
                </Form.Field>
                <Button type="submit">Submit</Button>
            </Form>
        </div>        
    )
}

export default RegisterUI;
