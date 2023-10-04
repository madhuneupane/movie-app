import NavigationButtons from "./NavigationButtons";
import { getMovies, getTVs } from "../backend/apiGetData";
import { useEffect, useState } from "react";
import MovieList from "./list/MovieList";
import Dropdown from "./DropDown";
import Loading from "./Loading";
import SearchScreen from "../SearchScreen";

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
    
    getMovies("now_playing").then((data)=>{
        setPopularMovies(data)
       
        
    
       });
       getTVs("airing_today").then((data)=>{
       // console.log(data[0]);
        setTVShows(data)
       })
     },[])


return (
    <>
    <NavigationButtons onSelect ={(selectedOption)=>{
        setTabOption(selectedOption);
        //console.log("from home:",selectedOption);
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
  />
  <MovieList movies={popularMovies} navigation={navigation} media="movie"/></>)}

{tabOption==1 &&(
  <>
  <SearchScreen navigation={navigation}/>

  </>
)}


{tabOption==2 && (
<>
<Dropdown
  options={['airing_today','on_the_air', 'popular', 'top_rated']}
  onSelect={(selectedOption) => {
    // Handle the selected option
    //console.log('Selected:', selectedOption);
    optionSelectedFromTV(selectedOption);
  }}
/>
  <MovieList movies={TvShows} navigation={navigation} media="tv"/></>)}
  
  
  
  </>}
    
    
    </>
)
}
export default Home;