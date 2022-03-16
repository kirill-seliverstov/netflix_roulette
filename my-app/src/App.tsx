import React from 'react';
import { Header } from './components/Header';
import { SearchForm } from './components/SearchForm';
import { Tabs } from './components/Tabs';
import { GlobalStyle } from './globalStyles';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />

      <Header />
      <SearchForm />
      <Tabs />
    </React.Fragment>
  );
}

export default App;
