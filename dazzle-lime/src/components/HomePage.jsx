
import Navbar from "./navbar/Navbar";
import {Header,Feed} from "./heading/Heading";
import { TopS,TopSlider } from "./slider/TopSlider";
import { Box } from "@chakra-ui/react";
function HomePage(){
    return(
        <>
        <Navbar/>
        <Box bg='#EEEEEE' width='100%' h='100%'>
        <Header/>
        <br/>
        <Feed/>
        <TopS/>
        <TopSlider/>
        </Box>
        </>
    )
}
export default HomePage;