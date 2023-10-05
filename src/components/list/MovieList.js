import { FlatList, View } from "react-native"
import MovieCard from "../card/MovieCard"
import { useEffect, useState } from "react";
import { Button } from "@rneui/themed";

const MovieList = ({mediaData,navigation,media})=>{
    const [page, setPage] = useState(2);
    const [visibleData, setVisibleData] = useState(mediaData.slice(0, 10));
    //console.log("lehgth",mediaData.length);
    //  useEffect(()=>{
    //     loadMore();
    // },[])
    useEffect(()=>{},[page])
    const loadMore = () => {
       console.log(page);
        const startIndex = (page - 1) * 10;
        const endIndex = startIndex + 10;
        //console.log(startIndex);
        if (endIndex>mediaData.length) {
            alert("Data finished. Going 1st page")
            setPage(1)
            return
            
        }
        const moviesToDisplay = mediaData.slice(startIndex, endIndex);
        
        setVisibleData(moviesToDisplay);
        //console.log(visibleData.length);
      };
      const loadMoreClicked=()=>{
        setPage(page+1);
        const updatePage = page+1;
        
        loadMore();
      }
    return(
        <>
        <FlatList 
        data={visibleData.length?visibleData:mediaData}
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
        <Button title="Next Page" onPress={loadMoreClicked} style={{width:"100%", margin:20,justifyContent:"flex-end",alignItems:"center"}}/>
        </>
        
    )

}
export default MovieList;
