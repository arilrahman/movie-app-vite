import { useContext, useEffect } from "react";
import axios from "axios";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import ENDPOINTS from "../utils/endpoint";
import MoviesContext from "../components/Constext/MoviesContext";

function NowPlaying() {
  const { setMovies } = useContext(MoviesContext);

  useEffect(() => {
    async function fetchNowMovies() {
      try {
        const response = await axios(ENDPOINTS.NOW_PLAYING);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      }
    }

    fetchNowMovies();
  }, []);

  return (
    <>
      <Hero />
      <h2 style={{ margin: "1rem 0", color: "#4361ee" }}>Now Playing</h2>
      <Movies title="Now Playing Movies" />
    </>
  );
}

export default NowPlaying;
