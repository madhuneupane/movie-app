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
    const [selectedDropDownMovies, setSelectedDropDownMovies] = useState("now_playing");
    const [selectedDropDownTV, setSelectedDropDownTV] = useState("airing_today");

  const optionSelected=(param) =>{
      setLoading(true) 
      setSelectedDropDownMovies(param);   
      getMovies(param).then((data)=>{
        setPopularMovies(data)
        setLoading(false)
       });
    
 
  } 

  const optionSelectedFromTV=(param) =>{
    setLoading(true)
    setSelectedDropDownTV(param);
    getTVs(param).then((data)=>{
        setTVShows(data)
        setLoading(false)
    
       });
       
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
  selectedDropDown={selectedDropDownMovies}
  onSelect={(selectedOption) => {
    // Handle the selected option
    optionSelected(selectedOption);
    //console.log('Selected:', selectedOption);
  }}
  />
  <MovieList movies={popularMovies} navigation={navigation} media="movie"/>
  
  </>)}
  {/* </>} */}

{tabOption==1 &&(
  <>
  <SearchScreen navigation={navigation}/>

  </>
)}


{/* {loading ? <Loading />:<> */}
{tabOption==2 && (
<>
<Dropdown
  options={['airing_today','on_the_air', 'popular', 'top_rated']}
  selectedDropDown={selectedDropDownTV}
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