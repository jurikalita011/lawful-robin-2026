
import Navbar from "./navbar/Navbar";
import {Header,Feed} from "./heading/Heading";
import { TopS,TopSlider } from "./slider/TopSlider";
import { Box } from "@chakra-ui/react";
import ProductsHomepage from "./pages/homeProductsW";
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
        <ProductsHomepage/>
        </Box>
        
        </>
    )
}
export default HomePage;