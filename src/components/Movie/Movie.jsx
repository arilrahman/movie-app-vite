import styled from "styled-components";
import {Link} from "react-router-dom";


const StyledMovie = styled.div`
margin-button: 1rem;
img{
 border-radius: 25px;
  max-width: 100%;
  height: auto;
  margin-botton: 1rem;
}
h3{
color: #4361ee;
  font-size: 1.95rem;
  margin-bottom: 0.5rem;
}
p{
 color: #64748b;
}

@media (min-width: 768px) {
 

  .movie {
    flex-basis: 50%;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 1200px;
    margin: 3rem auto;
  }

  .movie {
    flex-basis: 25%;
    padding: 1rem;
  }
}
`
function Movie(props){
    const {movie} = props;

    const tmdbImage = `http://image.tmdb.org/t/p/w300/${movie.poster_path}`;
    const year = movie.year || movie. release_date; 

    return(
        <StyledMovie>
          <img src={movie.poster || tmdbImage} alt={movie.title} />

          <Link to={`/movie/${movie.id}`}>
           <h3>{movie.title}</h3>
           </Link>

           <p>{year}</p>
        </StyledMovie>
    );
}

export default Movie;