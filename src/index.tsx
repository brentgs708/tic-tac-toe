import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Routes from 'routes'
import Layout from 'layout'
import { GlobalStyles, theme } from 'styles'
import {unregister} from 'core';

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyles/>
     <BrowserRouter>
      <Layout>
       <Routes/>
      </Layout>
     </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister();
