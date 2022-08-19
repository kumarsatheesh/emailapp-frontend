import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import ProfileDropdown from "../userDropdown";
import { userFirstLogin, userList, userLogin } from '../../actions/users';
export default function Header() {
  const [userslist, setuserlist] = useState([]);
  const userData = async () => {
    if (!localStorage.user_token) {
      const login = await userFirstLogin();
    }
    const users = await userList();
    if (users.success) {
      setuserlist(users.userdata);
    }
  }

  const userClicklogin = async (id) => {
    await userLogin({ id });
    window.location = "/";
  }
  useEffect(() => {
    userData();
  }, [])
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Email
        </Navbar.Brand>
        <Nav className="ms-auto">
          <ProfileDropdown userlist={userslist} onUserClick={userClicklogin} />
        </Nav>
      </Container>
    </Navbar>
  );
}
