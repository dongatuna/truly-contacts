import React from "react"
import { Form, Button, Grid, Segment, Header as SemanticHeader } from 'semantic-ui-react'
import Header from '../../components/Header'

const RegisterUI = ({form: {onChange, form, registerFormValid}}) => {
    return (
        <div>
            <Header/>
            <Grid centered>
                <Grid.Column style={{maxWidth: 550, marginTop: 20}}>
                    <SemanticHeader> Signup Here
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
                            />
                        </Form.Field>
                        <Form.Field>                            
                            <Form.Input 
                                type="email" 
                                name ="email" 
                                label="Email"
                                value={ form.email || "" }
                                onChange={onChange}
                                placeholder="Enter your email address" />
                        </Form.Field>

                        <Form.Field>                           
                            <Form.Input 
                                type="text" 
                                name="firstName" 
                                value={ form.firstName || "" }
                                onChange={onChange}
                                placeholder="First Name" 
                                label="First Name" />
                        </Form.Field>
                        <Form.Field>                            
                            <Form.Input 
                                type="text" 
                                label="Last Name"
                                value={ form.lastName || "" }
                                onChange={onChange}
                                name="lastName" 
                                placeholder="Last Name" />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input 
                                type="password"
                                value={ form.password || "" }
                                onChange={onChange}
                                name="password" 
                                placeholder="Enter your password" 
                                label="Password"  />
                        </Form.Field>
                        <Button disabled={registerFormValid} fluid primary type="submit">Submit</Button>
                        </Form>
                        </Segment>
                    </SemanticHeader>
                </Grid.Column>
            </Grid>            
        </div>        
    )
}

export default RegisterUI;
