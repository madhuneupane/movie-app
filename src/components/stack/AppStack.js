import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from "../Home";

const Stack = createNativeStackNavigator()


const AppStack = ()=>{
    return(
        <>
        
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
            name="Index"
            component={Home}
            options={{
                title:'Recipe App',
                headerStyle:{
                    backgroundColor:'#2c3e50'
                },
                headerTitleStyle: {
                    color:'#fff'
                }
            }}/>
            
            </Stack.Navigator>
            </NavigationContainer>
            
            </>
            
    )
}
export default AppStack;