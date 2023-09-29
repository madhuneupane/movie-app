import React, {useState} from 'react'
import { ButtonGroup } from '@rneui/themed'
import { Text, StyleSheet } from 'react-native';
const NavigationButtons = ()=>{
    const [selectedIndex, setSelectedIndex] = useState(0);
    return(
        <>
        
        <ButtonGroup
          buttons={['SIMPLE', 'BUTTON', 'GROUP']}
          selectedIndex={selectedIndex}
          onPress={(value) => {
            setSelectedIndex(value);
            console.log(value);
          }}
          containerStyle={{ marginBottom: 20, marginTop: 0, width:'100%',marginLeft: 0 }}
        />
        </>
    )
}

export default NavigationButtons