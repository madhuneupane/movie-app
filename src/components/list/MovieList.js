import { FlatList } from "react-native"
import MovieCard from "../card/MovieCard"

const MovieList = ({movies,navigation})=>{
    //console.log(movies[0]);
   
    return(
        <FlatList 
        data={movies}
        renderItem={({item})=>(
            <MovieCard 
            image={item.poster_path}
            title={item.original_title || item.original_name}
            popularity={item.popularity}
            release={item.release_date}
            id={item.id}
            navigation={navigation}/>
    )}
        />
    )

}
export default MovieList;
