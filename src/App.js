import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Content from './container/Content/Content'
import "./fontello/css/fontello.css"

function App() {
  return (
    <BrowserRouter>
            <Content/>
    </BrowserRouter>
  );
}

export default App;
