import { Text,View, Image, StyleSheet } from "react-native"
import { getMovieByID,getTVByID,getPersonByID } from "../backend/apiGetData";
import { useEffect, useState } from "react";

const Details =({route})=>{
    const [movieData, setMovieData] = useState({})
   useEffect(()=>{

    if(route.params.media_type=="movie"){
    getMovieByID(route.params.id).then((data)=>{
        //console.log(data);
        setMovieData(data)
    })
}
    else if(route.params.media_type=="tv"){
        getTVByID(route.params.id).then((data)=>{
            //console.log(data);
            setMovieData(data)
        })
    }
    else{
        getPersonByID(route.params.id).then((data)=>{
            //console.log(data);
            setMovieData(data)
        })
    }
   },[])
    
    
    return(
      <View style={styles.container}>
    
          <Text style={{fontWeight:'bold',fontSize:20,color:'#525252'}}>{movieData.original_title}</Text>
          <Image style={{width:200,height:200,margin:10,marginTop:30}}source={{uri:'https://image.tmdb.org/t/p/w500'+movieData.poster_path}}></Image>
          <Text style={{margin:20,marginLeft:40,marginRight:40}}>{movieData.overview}</Text>
          <Text>Popularity: {movieData.popularity} | Release Date: {movieData.release_date || movieData.first_air_date}</Text>
      </View>
       
    )
}
const styles= StyleSheet.create({
    container:{
        font:"#525252",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center"
    }
})
export default Details