import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Index from '../pages/Index';
import UserForm from '../pages/UserForm';
import Questions from '../pages/Questions';
import Sent from '../pages/Sent';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Index} />
    <Route path="/form" component={UserForm} />
    <Route path="/questions" component={Questions} />
    <Route path="/enviado" component={Sent} />
  </Switch>
);

export default Routes;
