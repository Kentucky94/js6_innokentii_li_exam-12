import React from 'react';
import {Button} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

const AnonymousMenu = () => {
  return (
    <div>
      <Button tag={RouterNavLink} to='/login' color='success'>Login</Button>
      <Button tag={RouterNavLink} to='/register' color='primary'>Register</Button>
    </div>
  );
};

export default AnonymousMenu;