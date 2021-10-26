import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import RootRouter from './Routing/RootRouter';



const App = (props) => {
  return (
    <BrowserRouter>
      <MainLayout>
        <RootRouter/>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
