import { AUTH_KEY } from "../configuration/apidata";
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: AUTH_KEY,
  },
};
export const getMovies = async (param) => {
  let movies = []
  await fetch( `https://api.themoviedb.org/3/movie/${param}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => {
    movies = response.results
    
  })
  .catch(err => console.error(err));

  return movies
};
export const getMovie = async (id) => {
  //console.log(id);
  let movies = {}
  
  await fetch( `https://api.themoviedb.org/3/movie/${id}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => {
   
    movies = response
    //console.log(response);
    
  })
  .catch(err => console.error(err));

  return movies
};



export const getTVs = async (param) => {
  let TvShows = []
  await fetch( `https://api.themoviedb.org/3/tv/${param}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => {
    TvShows = response.results
    
  })
  .catch(err => console.error(err));

  return TvShows
};


