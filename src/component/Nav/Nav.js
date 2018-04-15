import React, { Component } from 'react';
import {Menu, Dropdown, Button, Responsive, Image} from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom'
import styles from './Styles.js' // Style JSS
import Logo from '../../assets/logo.svg';

import SearchBar from './SearchBar';

class Nav extends Component {
  render(){
    return(
      <Menu borderless style={styles.nav} className='fixed'>
        <Menu.Menu style={styles.menus}>
          <Menu.Item>
            <Link to='/'>
              <Image src={Logo} style={styles.logo}/>
            </Link>
          </Menu.Item>

          <Dropdown pointing floating item text='Kategori'>
            <Dropdown.Menu>
              <Dropdown.Item>Traditional</Dropdown.Item>
              <Dropdown.Item>Modern</Dropdown.Item>
              <Dropdown.Item>Patung</Dropdown.Item>
              <Dropdown.Item>Abstrak</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <NavLink to='/pameran' activeClass='active' className='item'>
            Pameran
          </NavLink>

          <NavLink to='/kompetisi' activeClass='active' className='item'>
            Kompetisi
          </NavLink>  
        </Menu.Menu>

        <Menu.Menu style={styles.searchContainer}>
          <Menu.Item style={styles.searchBox} >
            <SearchBar placeHolder='Cari Karya... '/>
          </Menu.Item>
        </Menu.Menu>

        <Menu.Menu style={styles.auth}>
          <Menu.Item>
            <Button style={styles.signup}>Daftar</Button>
            <Button style={styles.login}>Masuk</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Nav