import { FlatList, View } from "react-native"
import MovieCard from "../card/MovieCard"
import { useEffect, useState } from "react";
import { Button } from "@rneui/themed";

const MovieList = ({mediaData,navigation,media})=>{
    const [page, setPage] = useState(2);
    const [visibleData, setVisibleData] = useState(mediaData.slice(0, 10));
    
    useEffect(()=>{},[page])
    const loadMore = () => {

        const startIndex = (page - 1) * 10;
        const endIndex = startIndex + 10;
        if (endIndex>mediaData.length) {
            alert("Data finished. Going 1st page")
            setPage(1)
            return
            
        }
        const moviesToDisplay = mediaData.slice(startIndex, endIndex);
        
        setVisibleData(moviesToDisplay);
      };
      const loadMoreClicked=()=>{
        loadMore();
      }
    return(
        <>
        <FlatList 
        data={visibleData}
        renderItem={({item})=>(
            <MovieCard 
            image={item.poster_path}
            title={item.original_title || item.original_name}
            popularity={item.popularity}
            release={item.release_date || item.first_air_date}
            id={item.id}
            media={item.media_type || media}
            navigation={navigation}/>
    )}
        />
        <Button title="Next Page" onPress={()=>{
          //setPage is called here instead of from loadmoreClicked as it is asynchronous and was taking time to reflect the updates
          setPage(page+1);
          loadMoreClicked()}} style={{width:"100%", margin:20,justifyContent:"flex-end",alignItems:"center"}}/>
        </>
        
    )

}
export default MovieList;
