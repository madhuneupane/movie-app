import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from "../screens/Home";
import Details from "../screens/Details";

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
                title:'Movie App',
                headerStyle:{
                    backgroundColor:'#2c3e50'
                },
                headerTitleStyle: {
                    color:'#fff'
                }
            }}/>
            <Stack.Screen 
            name='Details'
            component={Details}
            options={{headerBackTitle:"Back to List",
            
        }}
            />
            </Stack.Navigator>
            </NavigationContainer>
            
            </>
            
    )
}
export default AppStack;