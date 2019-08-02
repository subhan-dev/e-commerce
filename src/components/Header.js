import React, { Component } from 'react';
import {
    Container,
    Icon,
    Dropdown,
    Input,
    Header,
    Image,
    Grid,
    Menu,
    Segment,
} from 'semantic-ui-react';

class NavBar extends Component {
    render() {
        return (
            <div>
                <Menu fixed='top' inverted>
                    <Container>
                        <Menu.Item as='a' header>
                            <Image size='mini' src='./assets/img/kisspng-e-commerce-logo-electronic-business-5b00d2d0bce719.8254681315267806247738.png' style={{ marginRight: '1.5em' }} />
                                e-Commerce
                        </Menu.Item>
                        <Menu.Item as='a'>Home</Menu.Item>
                
                        <Dropdown item simple text='Category'>
                            <Dropdown.Menu>
                                <Dropdown.Item>List Item</Dropdown.Item>
                                <Dropdown.Item>List Item</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Header>Header Item</Dropdown.Header>
                                <Dropdown.Item>
                                <i className='dropdown icon' />
                                <span className='text'>Submenu</span>
                                <Dropdown.Menu>
                                    <Dropdown.Item>List Item</Dropdown.Item>
                                    <Dropdown.Item>List Item</Dropdown.Item>
                                </Dropdown.Menu>
                                </Dropdown.Item>
                                <Dropdown.Item>List Item</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Menu.Item as='a'>About</Menu.Item>
                        <Menu.Item as='a'>Contact</Menu.Item>

                        <Menu.Menu position='right'>
                            <Menu.Item>
                                <Input icon={<Icon name='search' inverted circular link />} placeholder='Search...' />
                            </Menu.Item>
                            <Menu.Item as='a'>Login</Menu.Item>
                            <Menu.Item as='a'>Register</Menu.Item>
                        </Menu.Menu>
                    </Container>
                </Menu>


                
            </div>
        )
    }
}

export default NavBar
