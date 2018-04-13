import React, { Component } from 'react';
import {Menu, Input, Dropdown, Button} from 'semantic-ui-react';
import Logo from './logo.svg';
import SearchBar from './SearchBar'
class App extends Component {
  state = {}

  handleItemClick = (e, {name}) => this.setState({activeItem: name})

  render(){
    const {activeItem} = this.state
    return(
      <Menu borderless secondary>
        <Menu.Menu position='left'>
          <Menu.Item
            name='Home'
            onClick={this.handleItemClick}
          >
            <img src={Logo} style={styles.logo}/>
          </Menu.Item>

          <Dropdown pointing floating item text='Kategori'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item
            name='Pameran'
            active={activeItem === 'Pameran'}
            onClick={this.handleItemClick}
          >
            Pameran
          </Menu.Item>

          <Menu.Item
            name='Kompetisi'
            active={activeItem === 'Kompetisi'}
            onClick={this.handleItemClick}
          >
            Kompetisi
          </Menu.Item>

          <Menu.Item style={{width: 100+'%'}} >
            <SearchBar placeHolder='Cari Karya... '/>
          </Menu.Item>
        </Menu.Menu>

        <Menu.Menu position='right' style={{marginLeft: 0}}>
          <Menu.Item>
            <Button style={styles.signup}>Sign up</Button>
          </Menu.Item>
          <Menu.Item>
            <Button style={styles.login}>Log in</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

const styles = {
  logo:{
    width: 80
  },
  signup:{
    background: 'transparent',
    color: 'white',
    textDecoration: 'underline',
    fontSize: 14,
    paddingTop: 8,
    paddingRight: 12,
    paddingLeft: 12,
    paddingBottom: 8
  },
  login:{
    background: 'transparent',
    color: 'white',
    border: '2px solid white',
    fontSize: 14,
    paddingTop: 8,
    paddingRight: 12,
    paddingLeft: 12,
    paddingBottom: 8
  },
}

export default App