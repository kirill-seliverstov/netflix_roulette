import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from './components/Header';
import { SearchForm } from './components/SearchForm';
import { Tabs } from './components/Tabs';
import { GlobalStyle } from './globalStyles';
import { fetchMovies } from './store/movies/actions';
import { getMoviesSelector } from './store/movies/selectors';

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
