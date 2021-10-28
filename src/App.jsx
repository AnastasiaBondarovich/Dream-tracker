import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalModalProvider from 'HOC/GlobalModalProvider';
import MainLayout from 'Layouts/MainLayout';
import RootRouter from 'Routing/RootRouter';



const App = (props) => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <GlobalModalProvider>
          <MainLayout>
            <RootRouter/>
          </MainLayout>
        </GlobalModalProvider>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
