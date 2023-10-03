import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Dropdown from "./components/DropDown";

const SearchScreen = () => {
  const [isFocused, setIsFocused] = useState(false);

  const optionSelectedFromSearch = (optionSelected)=>{
    console.log(optionSelected);

  }

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.label}>Search Movie/TV Show Name<Text style={styles.asterisk}>*</Text></Text>
        <View
          style={[
            styles.inputContainer,
            isFocused && styles.focusedInputContainer, // Apply the shadow when focused
          ]}
        >
          <Icon name="search" size={20} style={styles.searchIcon} />
          <TextInput
            style={styles.input}
            placeholder="i.e James Bond, CSI"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </View>
      <Text style={styles.label}>Choose Search Type<Text style={styles.asterisk}>*</Text></Text>
      </View>
      <Dropdown
  options={['movie','multi', 'popular', 'top_rated']}
  onSelect={(selectedOption) => {
    // Handle the selected option
    //console.log('Selected:', selectedOption);
    optionSelectedFromSearch(selectedOption);
  }}
/>

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft:30
   // alignItems: "center",
  },
  label: {
    //marginRight: 120,
    marginLeft:12,
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
  },
  focusedInputContainer: {
  
    shadowColor: "rgba(111, 202, 186, 1) ",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    flex: 1,
  },
  searchIcon: {
    marginRight: 10,
  },
});

export default SearchScreen;
