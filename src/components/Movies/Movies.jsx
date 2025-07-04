import styles from "./Movies.module.css";
import Movie from "../Movie/Movie";
import { useContext } from "react";
import MoviesContext from "../Constext/MoviesContext";

function Movies({ title = "Latest Movies" }) {
  const { movies } = useContext(MoviesContext);

  if (!movies || movies.length === 0) {
    return <p style={{ textAlign: "center", marginTop: "2rem" }}>Loading movies...</p>;
  }

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>{title}</h2>
        <div className={styles.movies__container}>
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Movies;
