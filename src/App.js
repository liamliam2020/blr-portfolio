import React from 'react';
import {HashRouter} from 'react-router-dom';

import './App.css';
import Layout from './hoc/Layout/Layout';

const App = (props) => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Layout />
    </HashRouter>
  );
};

export default App;
