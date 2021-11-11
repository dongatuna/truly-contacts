import React from "react"
import { Form, Button, Grid, Segment, Header as SemanticHeader } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import Header from '../../components/Header'

const RegisterUI = ({form: {onChange, form, loading, registerFormValid, onSubmit, fieldErrors }}) => {
    return (
        <div>
            <Header/>
            <Grid centered>
                <Grid.Column style={{maxWidth: 550, marginTop: 20}}>
                    <SemanticHeader> Signup Here </SemanticHeader>
                        <Segment>
                        <Form>
                        <Form.Field>                         
                            <Form.Input 
                                type="text" 
                                name="username" 
                                label="Username"
                                placeholder="Enter your username"
                                value={form.username || ""}
                                onChange={onChange}
                                error = {
                                    fieldErrors.username && {
                                        content: fieldErrors.username,
                                        pointing: "below"
                                    }
                                }
                            />
                        </Form.Field>
                        <Form.Field>                            
                            <Form.Input 
                                type="email" 
                                name ="email" 
                                label="Email"
                                value={ form.email || "" }
                                onChange={onChange}
                                placeholder="Enter your email address" 
                                error = {
                                    fieldErrors.email && {
                                        content: fieldErrors.email,
                                        pointing: "below"
                                    }
                                }
                            />
                        </Form.Field>

                        <Form.Field>                           
                            <Form.Input 
                                type="text" 
                                name="firstName" 
                                value={ form.firstName || "" }
                                onChange={onChange}
                                placeholder="First Name" 
                                label="First Name"
                                error = {
                                    fieldErrors.first_name && {
                                        content: fieldErrors.first_name,
                                        pointing: "below"
                                    }
                                }
                            />
                        </Form.Field>
                        <Form.Field>                            
                            <Form.Input 
                                type="text" 
                                label="Last Name"
                                value={ form.lastName || "" }
                                onChange={onChange}
                                name="lastName" 
                                placeholder="Last Name"
                                error = {
                                    fieldErrors.last_name && {
                                        content: fieldErrors.last_name,
                                        pointing: "below"
                                    }
                                }
                                
                            />
                                
                        </Form.Field>
                        <Form.Field>
                            <Form.Input 
                                type="password"
                                value={ form.password || "" }
                                onChange={onChange}
                                name="password" 
                                placeholder="Enter your password" 
                                label="Password"  
                                error = {
                                    fieldErrors.password && {
                                        content: fieldErrors.password,
                                        pointing: "below"
                                    }
                                }
                            />
                        </Form.Field>
                        <Button 
                            onClick={onSubmit} 
                            disabled={registerFormValid || loading} 
                            fluid 
                            loading = { loading}
                            primary 
                            type="submit"
                        >
                            Submit
                        </Button>
                        
                        </Form>
                        <Segment>Already have an account? Login <Link to="/auth/login"> here </Link></Segment>
                    </Segment>
                    
                </Grid.Column>
            </Grid>            
        </div>        
    )
}

export default RegisterUI;
