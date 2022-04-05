import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderComponent } from './components/Header';
import { MovieDescription } from './components/Movies/MovieDescription';
import { SearchForm } from './components/SearchForm';
import { Tabs } from './components/Tabs';
import { GlobalStyle } from './globalStyles';
import { fetchMovies } from './store/movies/actions';
import { getMovieDescritionSelector, getMoviesSelector } from './store/movies/selectors';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <HeaderComponent />
      <Tabs />
    </React.Fragment>
  );
}

export default App;
