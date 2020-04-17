import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {ToastContainer} from "react-toastify";

import Layout from "./components/Layout/Layout";
import {useSelector} from "react-redux";

const ProtectedRoute = ({isAllowed, ...props}) => {
  return isAllowed ? <Route {...props} /> : <Redirect to='/' />
};

const App = () => {
  const user = useSelector(state => state.users.user);

  return (
    <Layout>
      <ToastContainer />
      <Switch>

      </Switch>
    </Layout>
  );
};

export default App;