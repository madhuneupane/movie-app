import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


function Dropdown(props) {
  const { options, onSelect } = props;
  const [isVisible, setIsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Popular");

  const toggleDropdown = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} >
        <Text>{selectedOption} </Text>
        <Icon style={{color:"grey"}} name="chevron-down" size={20} onPress={toggleDropdown}/>
       
      </TouchableOpacity>

      <Modal
        transparent={true}
        animationType="slide"
        visible={isVisible}
        onRequestClose={() => {
          setIsVisible(!isVisible);
        }}
      >
        <TouchableWithoutFeedback onPress={toggleDropdown}>
          <View style={styles.modalContainer}>
            <View style={styles.dropdown}>
              {options.map((option) => (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.dropdownOption,
                    option === selectedOption && styles.selectedOption,
                  ]}
                  onPress={() => {
                    setSelectedOption(option)
                    onSelect(option);
                    toggleDropdown();
                  }}
                >
                  <Text>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop:10,
alignItems:"center"
//justifyContent:"center"

  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    width:200,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  dropdown: {
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
  },
  dropdownOption: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  selectedOption: {
    backgroundColor: 'lightblue',
  },
});

export default Dropdown;
