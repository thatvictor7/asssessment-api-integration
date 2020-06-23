import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import '../styling/navbar.css'

export default class MenuExampleStackable extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu stackable className='navbar primary'>
                <Menu.Item>
                    <div className='logo-container'>
                        <Icon className='secondary-text' size='large' name='github' />
                        <div className='white-text logo-text'>Angular Github Issues</div>
                    </div>
                </Menu.Item>

                {/* <Menu.Item
                    name='features'
                    active={activeItem === 'features'}
                    onClick={this.handleItemClick}
                >
                    Features
                </Menu.Item> */}

            </Menu>
        )
    }
}