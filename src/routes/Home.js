import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import "./Home.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);

  const getMovies = async () => {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year")
    const json = await response.json();
    setMovieList(json.data.movies);
    setLoading(false);
  };
  
  useEffect(() => {
    getMovies();
  }, []);

  console.log(movieList);

  return (
    <div className="movie_list_wrap">
      <div className="movie_list">
        { loading ? <div className="loader"></div> : null }
        { !loading && 
          movieList.map((movie) => {
            return (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                genres={movie.genres}
                rating={movie.rating}
              />
            );
          })
        }
      </div>
    </div>
  );
}

export default Home;