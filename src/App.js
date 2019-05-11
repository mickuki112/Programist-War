import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout'
import {BrowserRouter} from 'react-router-dom';
import Content from './container/Content/Content'

function App() {
  return (
    <BrowserRouter>
        <Layout>
            <Content/>
        </Layout>
    </BrowserRouter>
  );
}

export default App;
