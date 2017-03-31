import React from 'react';
import { Route, IndexRoute } from 'react-router';
import DashboardPage from './js/components/dashboard/DashboardPage';
import Homepage from './js/components/Home/HomePage';
import App from './js/app';
import Auth from './js/components/Auth/index';
import ViewDocument from './js/components/dashboard/documents/viewDocument';
import Documents from './js/components/dashboard/documents/Documents';
import CreateDocument from './js/components/dashboard/documents/CreateDocument';
import ProfilePage from './js/components/dashboard/ProfilePage';

export default (
  <Route path="/"  component={App} > 
      <IndexRoute component={Homepage} />
      <Route path="login" component={Auth} />
      <Route path="/dashboard" component={DashboardPage} >
        <IndexRoute component={Documents} />
        <Route path="documents/:id" component={ViewDocument}></Route>
        <Route path="document" component={CreateDocument}></Route>
        <Route path="profile" component={ProfilePage}></Route>
        {/*<Route path="documents/:id/edit" component={ViewDocument}></Route>*/}
      </Route>
      <Route path="*" component={ViewDocument} />
  </Route>
);
