import { useContext, useEffect } from "react";
import axios from "axios";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import ENDPOINTS from "../utils/endpoint";
import MoviesContext from "../components/Constext/MoviesContext";

function TopRated() {
  const { setMovies } = useContext(MoviesContext);

  useEffect(() => {
    async function fetchTopRatedMovies() {
      try {
        const response = await axios(ENDPOINTS.TOP_RATED);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Gagal mengambil data Top Rated Movies:", error);
      }
    }

    fetchTopRatedMovies();
  }, []);

  return (
    <>
      <Hero />
      <h2 style={{ margin: "1rem 0", color: "#4361ee" }}>Top Rated</h2>
      <Movies title="Top Rated Movies" />
    </>
  );
}

export default TopRated;
