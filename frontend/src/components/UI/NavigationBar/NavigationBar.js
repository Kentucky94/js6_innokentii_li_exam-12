import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import {useSelector} from "react-redux";
import UserMenu from "../UserMenu";
import AnonymousMenu from "../AnonymousMenu";

const NavigationBar = () => {
  const user = useSelector(state => state.users.user);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand className='mr-auto' href="/">Gallery App</NavbarBrand>
        <div>
          {user ? <UserMenu displayName={user.displayName}/> : <AnonymousMenu />}
        </div>
      </Navbar>
    </div>
  );
};

export default NavigationBar;