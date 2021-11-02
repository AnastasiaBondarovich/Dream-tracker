import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalModalProvider from 'HOC/GlobalModalProvider';
import MainLayout from 'Layouts/MainLayout';
import RootRouter from 'Routing/RootRouter';
import GlobalStoreProvider from 'HOC/GlobalStoreProvider';



const App = (props) => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <GlobalStoreProvider>
          <GlobalModalProvider>
            <MainLayout>
              <RootRouter/>
            </MainLayout>
          </GlobalModalProvider>
        </GlobalStoreProvider>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
