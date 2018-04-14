import React, { Component } from 'react';
import {Menu, Dropdown, Button, Responsive, Image} from 'semantic-ui-react';
import Logo from './logo.svg';
import SearchBar from './SearchBar'
class App extends Component {
  state = {}

  handleItemClick = (e, {name}) => this.setState({activeItem: name})

  render(){
    const {activeItem} = this.state
    return(
      <Menu borderless secondary style={styles.nav} >
        <Menu.Menu style={styles.menus}>
          <Menu.Item>
            <Image src={Logo} style={styles.logo}/>
          </Menu.Item>

          <Dropdown pointing floating item text='Kategori'>
            <Dropdown.Menu>
              <Dropdown.Item>Traditional</Dropdown.Item>
              <Dropdown.Item>Modern</Dropdown.Item>
              <Dropdown.Item>Patung</Dropdown.Item>
              <Dropdown.Item>Abstrak</Dropdown.Item>
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
          
          
        </Menu.Menu>

        <Menu.Menu style={styles.searchContainer}>
          <Menu.Item style={styles.searchBox} >
            <SearchBar placeHolder='Cari Karya... '/>
          </Menu.Item>
        </Menu.Menu>

        <Menu.Menu style={styles.auth}>
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
  nav:{
    marginRight: 0, 
    marginLeft: 0, 
    display: 'flex', 
    alignItems: 'center',
    minWidth: 'max-content'
  },
  logo:{
    width: 80
  },
  menus:{
    marginLeft: 0, 
    marginRight: 0, 
    padding: 0, 
    flexShrink: 0
  },
  searchContainer:{
    marginLeft: 0, 
    marginRight: 0, 
    padding: 0, 
    flexGrow: 1,
    minWidth: '18rem'
  },
  searchBox:{
    width: 100+'%'
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