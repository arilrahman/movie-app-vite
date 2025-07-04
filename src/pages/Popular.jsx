import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import ENDPOINTS from "../utils/endpoint";
import MoviesContext from "../components/Constext/MoviesContext";

function PopularMovie() {

    // const [movies, setMovies] = useState([]);
    const {setMovies} = useContext(MoviesContext);

    useEffect (function() {
        async function fetchPopularMovies() {
            // const API_KEY = import.meta.env.VITE_API_KEY;
            // const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
            
            // const response = await axios(URL);
            const response= await axios(ENDPOINTS.POPULAR);
            setMovies(response.data.results);
            console.log(response);
        }

        fetchPopularMovies();
    }, []);

    return (
        <div>
            <Hero />
            <Movies title="Popular Movies" />
        </div>
    );
}

export default PopularMovie;
