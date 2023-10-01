import { Text } from "@rneui/themed"
import NavigationButtons from "./NavigationButtons";
import { getMovies } from "../backend/apiGetData";
import { useEffect, useState } from "react";
import MovieList from "./list/MovieList";
import Dropdown from "./DropDown";
import Loading from "./Loading";

const Home = ({navigation})=>
{
    const [popularMovies,setPopularMovies] = useState([]);
    const [loading, setLoading] = useState(false);

  const optionSelected=(param) =>{
    setLoading(true)
    console.log(loading);
    getMovies(param).then((data)=>{
        setPopularMovies(data)
        console.log(data[0].original_title);
        //console.log(data);
        
    
       });
       setLoading(false)
       console.log(loading);
  } 
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
    getMovies("now_playing").then((data)=>{
        setPopularMovies(data)
       
        
    
       });
     },[])


return (
    <>
    <NavigationButtons />
    <Dropdown
  options={['now_playing','popular', 'top_rated', 'upcoming']}
  onSelect={(selectedOption) => {
    // Handle the selected option
    optionSelected(selectedOption);
    console.log('Selected:', selectedOption);
  }}
  selectedOption={'Option 1'} // Initially selected option
  buttonText={'Select an Option'}
/>
{loading ? <Loading />:<MovieList movies={popularMovies} navigation={navigation}/>}
    
    
    </>
)
}
export default Home;