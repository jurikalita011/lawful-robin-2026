import { Container,Text , HStack, Box,VStack,Flex} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import HeadingListM from "./headingListM";
import { Link } from "react-router-dom"; 
function HeaderM(){
   
    return(
        <>
        <Box w='60%' ml='40px'>
           <Container>
           <HStack spacing='50px'>
                <Link to="/"><Text opacity="70%">
            WOMEN
            </Text></Link>
                <Text fontFamily='Helvetica' letterSpacing='1px' fontSize='13px' _hover={{ cursor: "pointer" }}textDecoration={"underline"}textDecorationColor={"green"}>MEN</Text>
            </HStack>
            </Container>
        </Box>
        </>
    )
};
function FeedM(){
    let data=[
    {"id":1,"img":"https://img0.junaroad.com/images/icons/men/shirts.png","text":"SHIRTS"},
    {"id":2,"img":"https://img0.junaroad.com/images/icons/men/jeans.png","text":"JEANS"},
    {"id":3,"img":"https://img0.junaroad.com/images/icons/men/trousers.png","text":"TROUSERS"},
    {"id":4,"img":"https://img0.junaroad.com/images/icons/men/ethnicsets.png","text":"ETHNIC SETS"},
    {"id":5,"img":"https://img0.junaroad.com/images/icons/men/footwear.png","text":"FOOTWEAR"},
    {"id":6,"img":"https://img0.junaroad.com/images/icons/men/kids.png","text":"KIDS"},
    {"id":7,"img":"https://img0.junaroad.com/images/icons/women/home.png","text":"HOME"},
    {"id":8,"img":"https://img0.junaroad.com/images/icons/men/accessory.png","text":"ACCESSORY"},
    {"id":9,"img":"https://img0.junaroad.com/images/icons/men/winter.png","text":"WINTER"},
    
]
    return(
        <>
        <Box pb='40px'>
            <Flex>
            <HStack pl='310px' spacing='18px' >
            <VStack>
                  <Image  _hover={{cursor: "pointer"}} w='50px' src="https://img1.junaroad.com//assets/images/mobileNotif/img-1628498908811.jpg"/>
                  <Text fontFamily={'Helvetica'} fontSize='10px'>MY FEED</Text>
                </VStack>
                <Text fontSize='30px' fontWeight='200' pb='10px' fontFamily='revert-layer'>|</Text>
                <VStack>
                  <Image  _hover={{cursor: "pointer"}} w='50px' border={"1px solid green"} borderRadius='30px' src="https://img0.junaroad.com/images/icons/men/tshirts.png"/>
                  <Text fontFamily={'Helvetica'} fontSize='10px'>T-SHIRT</Text>
                </VStack>
                </HStack>
                
                <HStack pl='20px' spacing='29px'>
                    {data.map((el)=><HeadingListM key={el.id} {...el}/>)}
                    
                </HStack>
                </Flex>
        </Box>
        </>
    )
}
export  {HeaderM,FeedM};