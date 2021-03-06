import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Image, Button, Icon } from 'semantic-ui-react'
import logo from '../../assets/images/logo.svg'

const Header = () => {

    const { pathname } = useLocation()

    console.log(pathname)
    return (
        <Menu secondary pointing>
            <Image src={logo} width={60} />
            <Menu.Item as={Link} to="/"  style={{fontSize:24}}> Truly Contacts </Menu.Item>
            { pathname ==='/' && (<Menu.Item position="right"> 
                <Button as={Link} to="/contacts/create" primary basic icon>
                    <Icon name="add"></Icon>
                    Create Contact
                </Button>
            </Menu.Item>)}
            { pathname === '/' && (<Menu.Item> 
                <Button color="red" basic icon>
                    <Icon name="log out"></Icon>
                        Logout
                </Button>
            </Menu.Item>)}
        </Menu>
    )
}

export default Header
