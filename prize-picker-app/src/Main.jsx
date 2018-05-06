import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Contact from './components/Contact';
import RandomNumber from './components/RandomNumber';
import ExportData from './components/ExportData';
import Admin from './components/Admin';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Contact} />
        <Route exact path="/randomnumber" component={RandomNumber} />
        <Route exact path="/exportdata" component={ExportData} />
        <Route exact path="/admin" component={Admin} />
      </Switch>
    </main>
  );
};

export default Main;
