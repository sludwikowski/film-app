import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { useSelector } from 'react-redux';

import { ToastContainer } from 'react-toastify';

import MainLayout from './layout/MainLayout';
import PageWrapper from '@/components/PageWrapper';

import routes from './routes/routes';

import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import themeConfigs from '@/configs/theme.configs';

function App() {
  const { themeMode } = useSelector((state) => state.themeMode);
  return (
    <ThemeProvider theme={themeConfigs.custom({ mode: themeMode })}>
      <BrowserRouter>
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          pauseOnHover
        />
        <CssBaseline />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {routes.map((route) =>
              route.index ? (
                <Route
                  index
                  key={route}
                  element={
                    route.state ? (
                      <PageWrapper state={route.state}>
                        {route.element}
                      </PageWrapper>
                    ) : (
                      route.element
                    )
                  }
                />
              ) : (
                <Route
                  path={route.path}
                  key={route}
                  element={
                    route.state ? (
                      <PageWrapper state={route.state}>
                        {route.element}
                      </PageWrapper>
                    ) : (
                      route.element
                    )
                  }
                />
              ),
            )}
          </Route>
        </Routes>{' '}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
