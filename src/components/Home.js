import { Text } from "@rneui/themed"
import NavigationButtons from "./NavigationButtons";
import { getMovies, getTVs } from "../backend/apiGetData";
import { useEffect, useState } from "react";
import MovieList from "./list/MovieList";
import Dropdown from "./DropDown";
import Loading from "./Loading";

const Home = ({navigation})=>
{
    const [popularMovies,setPopularMovies] = useState([]);
    const [TvShows,setTVShows] = useState([]);

    const [loading, setLoading] = useState(false);
    const [tabOption, setTabOption]=useState(0);

  const optionSelected=(param) =>{
    setLoading(true)
    //console.log(loading);
    getMovies(param).then((data)=>{
        setPopularMovies(data)
        //console.log(data[0].original_title);
       // console.log(data[0]);
        
    
       });
       setLoading(false)
       //console.log(loading);
  } 

  const optionSelectedFromTV=(param) =>{
    setLoading(true)
    //console.log(loading);
    getTVs(param).then((data)=>{
        setTVShows(data)
        //console.log(data[0].original_title);
        //console.log(data[0]);
        
    
       });
       setLoading(false)
       //console.log(loading);
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
       getTVs("airing_today").then((data)=>{
        setTVShows(data)
       })
     },[])


return (
    <>
    <NavigationButtons onSelect ={(selectedOption)=>{
        setTabOption(selectedOption);
        console.log("from home:",selectedOption);
    }} />
   
{loading ? <Loading />:<>{tabOption==0 && (
<>
    <Dropdown
  options={['now_playing','popular', 'top_rated', 'upcoming']}
  onSelect={(selectedOption) => {
    // Handle the selected option
    optionSelected(selectedOption);
    //console.log('Selected:', selectedOption);
  }}
  selectedOption={'Option 1'} // Initially selected option
  buttonText={'Select an Option'}/>
  <MovieList movies={popularMovies} navigation={navigation}/></>)}


{tabOption==2 && (
<>
<Dropdown
  options={['airing_today','on_the_air', 'popular', 'top_rated']}
  onSelect={(selectedOption) => {
    // Handle the selected option
    //console.log('Selected:', selectedOption);
    optionSelectedFromTV(selectedOption);
  }}
  selectedOption={'Option 1'} // Initially selected option
  buttonText={'Select an Option'}/>
  <MovieList movies={TvShows} navigation={navigation}/></>)}</>}
    
    
    </>
)
}
export default Home;