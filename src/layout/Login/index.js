import React from "react"
import { Link } from "react-router-dom"
import { Form, Button, Grid, Segment, Header as SemanticHeader, Message } from 'semantic-ui-react'
import Header from '../../components/Header'

const LoginUI = ({form: {onChange, form, loading, loginFormValid, error, onSubmit}}) => {
    return (
        <div>
            <Header/>
            <Grid centered>
                <Grid.Column style={{maxWidth: 550, marginTop: 20}}>
                    <SemanticHeader> Login to your account </SemanticHeader>
                    <Segment>
                        <Form>
                        { error && (<Message content = {error?.detail} negative/>)}
                        <Form.Field>                         
                            <Form.Input 
                                type="text" 
                                name="username" 
                                label="Username"
                                placeholder="Enter your username"
                                value={form.username || ""}
                                onChange={onChange}
                                
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
                               
                            />
                        </Form.Field>
                        <Button 
                            onClick={onSubmit} 
                            disabled={loginFormValid || loading} 
                            fluid 
                            loading = { loading}
                            primary 
                            type="submit"
                        >
                            Submit
                        </Button>
                        
                        </Form>
                        <Segment>Need an account? Sign up <Link to="/auth/register"> here </Link></Segment>
                    </Segment>
                    
                </Grid.Column>
            </Grid>            
        </div>        
    )
}

export default LoginUI;
