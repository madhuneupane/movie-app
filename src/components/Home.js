import { Text } from "@rneui/themed"
import NavigationButtons from "./NavigationButtons";
import { getPopularMovies } from "../backend/apiGetData";

const Home = async()=>{
const res = await getPopularMovies();
console.log(res);
return (
    <>
    <NavigationButtons />
    <Text>Hello</Text>
    </>
)
}
export default Home;