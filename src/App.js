import './App.css';
import React from 'react';
import Container from './components/layout/Container';
import Sidebar from './components/layout/Sidebar';
import Content from './components/layout/Content';
import Widgets from './components/layout/Widgets';

function App() {
  return (
    <>
      <Container>
      <Sidebar />
      <Content />
      <Widgets />
      </Container>  
    </>
  );
}

export default App;
