import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Index';
import MoviesContext from './components/Constext/MoviesContext';
import Home from './pages/home';
import CreateMovie from './pages/create';
import NowPlaying from './pages/NowPlaying';
import Popular from './pages/Popular';
import TopRated from './pages/TopRated';
import Counter from './components/Counter/Counter';
import DetailMovie from './pages/Detail';

import data from './utils/constans/data';

function App() {
  const [movies, setMovies] = useState(data);
  const contextValue = { movies, setMovies };

  return (
    <MoviesContext.Provider value={contextValue}>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/create' element={<CreateMovie />} />
          <Route path='/movie/now' element={<NowPlaying />} />
          <Route path='/movie/popular' element={<Popular />} />
          <Route path='/movie/top' element={<TopRated />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/movie/:id' element={<DetailMovie />} />
        </Routes>
      </Layout>
    </MoviesContext.Provider>
  );
}

export default App;
