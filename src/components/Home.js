import { Text } from "@rneui/themed"
import NavigationButtons from "./NavigationButtons";
//import { getPopularMovies } from "../backend/api";

const Home = ()=>{
 const res = getPopularMovies()
console.log(res);
return (
    <>
    <NavigationButtons />
    <Text>Hello</Text>
    </>
)
}
export default Home;