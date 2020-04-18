import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {ToastContainer} from "react-toastify";

import Layout from "./components/Layout/Layout";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import GalleryMainPage from "./containers/GalleryMainPage/GalleryMainPage";
import AddPicturePage from "./containers/AddPicturePage/AddPicturePage";

const App = () => {
  return (
    <Layout>
      <ToastContainer />
      <Switch>
        <Route path='/' exact component={GalleryMainPage} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
        <Route path='/pictures/add' exact component={AddPicturePage} />
      </Switch>
    </Layout>
  );
};

export default App;