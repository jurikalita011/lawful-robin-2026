import { Container,Text , HStack, Box,VStack,Flex} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import HeadingList from "./HeadingList";
function Header(){
    
    return(
        <>
        <Box w='60%' ml='40px'>
           <Container>
           <HStack spacing='50px'>
                <Text fontFamily='Helvetica' letterSpacing='1px' fontSize='13px'>WOMEN</Text>
                <Text>MEN</Text>
            </HStack>
            </Container>
        </Box>
        </>
    )
};
function Feed(){
    let data=[
    {"id":1,"img":"https://img0.junaroad.com/images/icons/women/tops.png","text":"TOPS"},
    {"id":2,"img":"https://img0.junaroad.com/images/icons/women/dresses.png","text":"DRESSES"},
    {"id":3,"img":"https://img0.junaroad.com/images/icons/women/sarees.png","text":"SAREES"},
    {"id":4,"img":"https://img0.junaroad.com/images/icons/women/suits.png","text":"SUITS"},
    {"id":5,"img":"https://img0.junaroad.com/images/icons/women/ethnicsets.png","text":"ETHNIC SETS"},
    {"id":6,"img":"https://img0.junaroad.com/images/icons/women/bottoms.png","text":"BOTTOMS"},
    {"id":7,"img":"https://img0.junaroad.com/images/icons/women/bags.png","text":"BAGS"},
    {"id":8,"img":"https://img0.junaroad.com/images/icons/women/footwear.png","text":"FOOTWEAR"},
    {"id":9,"img":"https://img0.junaroad.com/images/icons/women/kids.png","text":"KIDS"},
    {"id":10,"img":"https://img0.junaroad.com/images/icons/women/addons.png","text":"ADD ONES"},
    {"id":11,"img":"https://img0.junaroad.com/images/icons/women/home.png","text":"HOME"},
    {"id":12,"img":"https://img0.junaroad.com/images/icons/women/winter.png","text":"WINTER"},
    
]
    return(
        <>
        <Box pb='40px'>
            <Flex>
            <HStack pl='210px' spacing='18px'>
            <VStack>
                  <Image w='50px'  src="https://img1.junaroad.com//assets/images/mobileNotif/img-1628498908811.jpg"/>
                  <Text fontFamily={'Helvetica'} fontSize='10px'>MY FEED</Text>
                </VStack>
                <Text fontSize='30px' fontWeight='200' pb='10px' fontFamily='revert-layer'>|</Text>
                <VStack>
                  <Image w='50px' border={"1px solid green"} borderRadius='30px' src="https://img0.junaroad.com/images/icons/women/kurtas.png"/>
                  <Text fontFamily={'Helvetica'} fontSize='10px'>KURTAS</Text>
                </VStack>
                </HStack>
                
                <HStack pl='20px' spacing='29px'>
                    {data.map((el)=><HeadingList key={el.id} {...el}/>)}
                    
                </HStack>
                </Flex>
        </Box>
        </>
    )
}
export  {Header,Feed};