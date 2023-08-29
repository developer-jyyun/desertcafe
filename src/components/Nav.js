import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';       
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

import React from 'react'

const NavWrap = () => {
  const navigate = useNavigate();
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate("/") }}>전체메뉴</Nav.Link>
            <Nav.Link onClick={()=>{ navigate("/desert") }}> 디저트</Nav.Link>
            <Nav.Link onClick={()=>{ navigate("/beverage") }}>음료</Nav.Link>
            {/* <Nav.Link href="/detail">detail</Nav.Link> */}
            <Nav.Link onClick={()=>{ navigate("/pay") }}>Pay</Nav.Link>
            </Nav>
        </Container>
        </Navbar>
    </div>
  )
}

export default NavWrap