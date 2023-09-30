import { Text } from "@rneui/themed"
import NavigationButtons from "./NavigationButtons";
import { getMovies } from "../backend/apiGetData";
import { useEffect, useState } from "react";
import MovieList from "./list/MovieList";


const Home = ({navigation})=>
{
    const [popularMovies,setPopularMovies] = useState([]);
    const [loading, setLoading] = useState(true);

  
     useEffect(()=>{
    //     const returnMovies = async(param)=>{
    //         const res = await getMovies(param);
            
    //         return res.results;
    //     }
    //     //const nowPlayingMovies = returnMovies("now_playing");
    //     const popularMovie = returnMovies("popular")
    //     setPopularMovies(popularMovie);
    //     console.log(popularMovie);
    //     //const topRated = returnMovies("top_rated")
    //     //const upcoming = returnMovies("upcoming")
    getMovies("popular").then((data)=>{
        setPopularMovies(data)
        //console.log(data);
        
    
       });
     },[])


return (
    <>
    <NavigationButtons />
    
    <MovieList movies={popularMovies} navigation={navigation}/>
    </>
)
}
export default Home;