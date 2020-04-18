import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {ToastContainer} from "react-toastify";

import Layout from "./components/Layout/Layout";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";

const App = () => {
  return (
    <Layout>
      <ToastContainer />
      <Switch>
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
      </Switch>
    </Layout>
  );
};

export default App;