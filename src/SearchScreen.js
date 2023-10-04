import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Dropdown from "./components/DropDown";
import { Button } from "@rneui/themed";
import { searchResult } from "./backend/apiGetData";
import MovieList from "./components/list/MovieList";

const SearchScreen = ({navigation}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchName, setSearchName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [optionChose, setOptionChose] = useState("movie");
  const [media, setMedia] = useState([]);

  const searchClicked = () => {
    if (!searchName) {
      setErrorMessage("Movie/TV show name is required");
      
    } else {
      setErrorMessage("")
      searchResult(optionChose, searchName).then((data)=>{
        //setPopularMovies(data)
        setMedia(data);
        console.log(data[0]);
       //console.log(data[0]);
        
    
       });
    }
  };

  const optionSelectedFromSearch = (optionSelected) => {
    setOptionChose(optionSelected);
    console.log(optionSelected);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const inputContainerStyles = [
    styles.inputContainer,
    isFocused && styles.focusedInputContainer, 
    errorMessage && styles.errorInputContainer, 
  ];

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.label}>
          Search Movie/TV Show Name<Text style={styles.asterisk}>*</Text>
        </Text>
        <View style={inputContainerStyles}>
          <Icon name="search" size={20} style={styles.searchIcon} />
          <TextInput
            style={styles.input}
            placeholder="i.e James Bond, CSI"
            onChangeText={(e) => {
              setSearchName(e);
            }}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </View>
        <Text style={styles.label}>Choose Search Type<Text style={styles.asterisk}>*</Text></Text>
      </View>

      <View style={styles.searchContainer}>
        <Dropdown
          options={['movie','multi', 'tv']}
          onSelect={(selectedOption) => {
            optionSelectedFromSearch(selectedOption);
          }}
        />

        <Button
          title="Search"
          buttonStyle={{
            backgroundColor: 'rgba(111, 202, 186, 1)',
            height: 40,
            marginTop: 11,
            borderRadius: 3,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}
          onPress={searchClicked}
        >
          <Icon name="search" size={20} style={styles.searchButtonIcon} />
          <Text style={styles.searchButtonText}>Search</Text>
        </Button>
      </View>

      {errorMessage && (
        <Text style={{ marginLeft: 50, marginTop: 5, color: "red", fontSize: 12 }}>
          {errorMessage}
        </Text>
      )}
      {media.length?<MovieList movies={media} navigation={navigation} media={optionChose}/>:
      <Text style={{marginLeft:100,marginTop:170, fontSize:20, fontWeight:"bold"}}>Please Initiate a Search</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 30,
  },
  label: {
    marginLeft: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  asterisk: {
    color: "red",
    marginLeft: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    margin: 12,
    padding: 10,
    width: "80%",
    backgroundColor: "lightgrey",
    borderColor: "lightgrey",
    borderWidth: 1, 
  },
  focusedInputContainer: {
    shadowColor: "rgba(111, 202, 186, 1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
    borderColor: "rgba(111, 202, 186, 1)", 
  },
  errorInputContainer: {
    borderColor: "red", 
  },
  input: {
    flex: 1,
  },
  searchIcon: {
    marginRight: 10,
    color:"gray"
  },
  searchContainer: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },
  searchButtonIcon: {
    marginRight: 5,
    color:"white"
  },
  searchButtonText: {
    color: "white",
  },
});

export default SearchScreen;
