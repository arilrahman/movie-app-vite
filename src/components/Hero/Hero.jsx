import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const HeroLeft = styled.div`
  flex: 1;
`;

const HeroRight = styled.div`
  flex: 1;
  text-align: right;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const HeroTitle = styled.h2`
  font-size: 2rem;
  margin: 0;
`;

const HeroGenre = styled.h3`
  font-size: 1.2rem;
  font-weight: 400;
  color: #b5179e;
`;

const HeroDescription = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 10px;
`;

const HeroButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;

  ${({ size }) => {
    switch (size) {
      case 'sm':
        return `
          font-size: 0.8rem;
          padding: 0.2rem 0.5rem;
        `;
      case 'lg':
        return `
          font-size: 1.3rem;
          padding: 0.5rem 1rem;
        `;
      case 'md':
      default:
        return `
          font-size: 1rem;
          padding: 0.5rem 1rem;
        `;
    }
  }}
`;

function Hero() {
  const [movie, setMovie] = useState({});
  const API_KEY = import.meta.env.VITE_API_KEY;
  
useEffect(() => {
              async function fetchTrendingMovie() {
            const API_KEY = import.meta.env.VITE_API_KEY;
            const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
            const response = await axios(URL);
            const firstMovie = response.data.results[0];
            return firstMovie;
        }
        fetchTrendingMovie();
        
        async function fetchDetailMovie() {
            const trendingMovie = await fetchTrendingMovie();
            const id = trendingMovie.id;
            const params = `?api_key=${API_KEY}&append_to_response=videos`;
            const URL = `https://api.themoviedb.org/3/movie/${id}${params}`;
            const response = await axios(URL);
            setMovie(response.data);
        }
        fetchDetailMovie();
    }, [API_KEY]);

  // useEffect(() => {
  //   async function fetchMovie() {
  //     const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setMovie(data);
  //   }

  //   fetchMovie();
  // }, []);

  return (
    <Container>
      <HeroSection>
        <HeroLeft>
          <h2>{movie.title}</h2>
                  <HeroDescription>{movie.overview}</HeroDescription>
          <HeroButton size="md">Watch</HeroButton>
        </HeroLeft>
        <HeroRight>
          <HeroImage src={`http://image.tmdb.org/t/p/w300/${movie.backdrop_path}`} alt="placeholder" />
        </HeroRight>
      </HeroSection>
    </Container>
  );
}

export default Hero;