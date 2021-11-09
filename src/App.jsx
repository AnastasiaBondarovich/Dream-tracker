import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalModalProvider from 'HOC/GlobalModalProvider';
import MainLayout from 'Layouts/MainLayout';
import GlobalStoreProvider from 'HOC/GlobalStoreProvider';
import LoginRouter from './Routing/LoginRouter';



const App = (props) => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <GlobalStoreProvider>
          <GlobalModalProvider>
            <MainLayout>
              <LoginRouter/>
            </MainLayout>
          </GlobalModalProvider>
        </GlobalStoreProvider>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
