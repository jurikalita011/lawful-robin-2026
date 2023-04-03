import {Box,HStack,Image,Text,VStack,Flex} from "@chakra-ui/react"
import {SearchIcon} from "@chakra-ui/icons"
import {HiPencil} from "react-icons/hi";
import {CgProfile} from "react-icons/cg"
import {MdShoppingCart} from "react-icons/md"
import logo from "../../images/dazzle-logo2.png"
import stylesss from "../../styles/Navbar.module.css"
import { Link } from "react-router-dom";
function ProductsNav(){
    return(
<>
       
        <Box className={stylesss.box}>
        <Flex>
        <HStack spacing='55px' className={stylesss.hsl} _hover={{cursor: "pointer"}}>
        <Link to={"/"}><Image w={"100px"} src={logo}/></Link>
        <Link to={"/women"}><Text  className={stylesss.hslText} >WOMEN</Text></Link>
        <Text className={stylesss.hslText}>MEN</Text>
        <Text className={stylesss.hslText}>KIDS</Text>
        <Text className={stylesss.hslText} color="#D3145A" verticalAlign='middle'>OFFERS</Text>
        </HStack>
        <HStack spacing='30px' className={stylesss.hsr} _hover={{cursor: "pointer"}} >
        <VStack spacing='1px'>
         <HiPencil className={stylesss.vsIcon}/>
         <Text className={stylesss.vsText}>SCRAPBOOK</Text>
        </VStack>
        <VStack spacing='1px'>
         <SearchIcon className={stylesss.vsIcon}/>
         <Text className={stylesss.vsText}>SEARCH</Text>
        </VStack>
        <VStack spacing='1px'>
         <MdShoppingCart className={stylesss.vsIcon}/>
         <Text className={stylesss.vsText}>CART</Text>
        </VStack>
        <VStack spacing='1px'>
         <CgProfile className={stylesss.vsIcon}/>
         <Text className={stylesss.vsText}>PROFILE</Text>
        </VStack>
        </HStack>
        </Flex>
        </Box>
        
</>
    )
}
export default ProductsNav;