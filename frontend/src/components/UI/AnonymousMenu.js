import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import {Button} from "reactstrap";
import {useDispatch} from "react-redux";
import {loginWithFacebook} from "../../store/actions/usersActions";

const AnonymousMenu = () => {
  const dispatch = useDispatch();

  const responseFacebook = event => {
    dispatch(loginWithFacebook(event));
    console.log(event);
  };

  return (
    <div>
      <FacebookLogin
        appId="237001530836786"
        callback={responseFacebook}
        render={renderProps => (
          <Button color='primary' onClick={renderProps.onClick}>Login with Facebook</Button>
        )}
      />
    </div>
  );
};

export default AnonymousMenu;