import React from 'react';
import { Route } from 'react-router-dom';
import RegisterScreen from '../screens/registerScreen';

export default function Routes() {
  return (
      <Route path="/register" component={RegisterScreen} />
  );
}