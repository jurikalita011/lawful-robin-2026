import {Box,HStack,Image,Text,VStack,Flex} from "@chakra-ui/react"
import {SearchIcon} from "@chakra-ui/icons"
import {HiPencil} from "react-icons/hi";
import {CgProfile} from "react-icons/cg"
import {MdShoppingCart} from "react-icons/md"
import logo from "../../images/dazzle-logo1.png"
import styless from "../../styles/Navbar.module.css"
import { Link } from "react-router-dom";
function Navbar(){
    return(
<>
       
        <Box className={styless.box}>
        <Flex>
        <HStack spacing='55px' className={styless.hsl} _hover={{cursor: "pointer"}}>
        <Link to={"/"}><Image className={styless.logo1} src={logo}/></Link>
        <Link to={"/women"}><Text  className={styless.hslText} >WOMEN</Text></Link>
        <Text className={styless.hslText}>MEN</Text>
        <Text className={styless.hslText}>KIDS</Text>
        <Text className={styless.hslText} color="#D3145A" verticalAlign='middle'>OFFERS</Text>
        </HStack>
        <HStack spacing='30px' className={styless.hsr} _hover={{cursor: "pointer"}} >
        <VStack spacing='1px'>
         <HiPencil className={styless.vsIcon}/>
         <Text className={styless.vsText}>SCRAPBOOK</Text>
        </VStack>
        <VStack spacing='1px'>
         <SearchIcon className={styless.vsIcon}/>
         <Text className={styless.vsText}>SEARCH</Text>
        </VStack>
        <VStack spacing='1px'>
         <MdShoppingCart className={styless.vsIcon}/>
         <Text className={styless.vsText}>CART</Text>
        </VStack>
        <VStack spacing='1px'>
         <CgProfile className={styless.vsIcon}/>
         <Text className={styless.vsText}>PROFILE</Text>
        </VStack>
        </HStack>
        </Flex>
        </Box>
        
</>
    )
}
export default Navbar;