

import AddMovieForm from '../components/AddMovie/AddMovie';
import Hero from '../components/Hero/Hero';
// import Footer from '../components/Footer/Footer';
import Movies from '../components/Movies/Movies';
// import Navbar from '../components/Navbar/Navbar';
import { useState } from 'react';
import data from '../utils/constans/data';
// import Button from '../components/UI/Button/Index';

function Home(){
// const[movies, setMovies] = useState(data);
// const [movies] = useState(data);
    return(
        <div>
            {/* <Navbar/> */}
            <main>
                <Hero />
              {/* <Button variant="primary">Lihat</Button>
              <Button variant="secondary" full>Lihat</Button> */}
                {/* <Movies movies={movies} setMovies={setMovies} /> */}
                <Movies />
                {/* <AddMovieForm movies={movies} setMovies={setMovies} /> */}
            </main>
            {/* <Footer /> */}
        </div>
    ); 
}

export default Home;