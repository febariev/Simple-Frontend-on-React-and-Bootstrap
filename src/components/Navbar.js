import React, { useContext } from 'react';
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import Button from 'react-bootstrap/Button';

const NavBar = () => {
    const {user} = useContext(Context)

  return (
    <Navbar bg="light" variant="light">
    <Container>
      <NavLink style={{color: 'grey'}} to={SHOP_ROUTE}>TECHNO BAY</NavLink>
    {user.isAuth ?
      <Nav className="ml-auto">
        <Button variant={"outline-dark"}>Админ панель</Button>
        <Button variant={"outline-dark"}>Войти</Button>
      </Nav>
      :
      <Nav className="ml-auto">
        <Button variant={"outline-dark"}>Админ панель</Button>
        <Button variant={"outline-dark"}>Авторизация</Button>
      </Nav>
    }
    </Container>
  </Navbar>
  )
}

export default NavBar;