
import Navbar from "../navbar/Navbar";
import { Box } from "@chakra-ui/react";
import ProductsHomepageM from "./productPageM";
import { TopSliderM, TopSm } from "./TopSliderM";
import { FeedM, HeaderM } from "./headingM";
function HomePageMen(){
    return(
        <>

        <Navbar/>
        <Box bg='#EEEEEE' width='100%' h='100%'>
        <HeaderM/>
        <br/>
        <FeedM/>
        <TopSm/>
        <TopSliderM/>
        <ProductsHomepageM/>
        </Box>
        
        </>
    )
}
export default HomePageMen;