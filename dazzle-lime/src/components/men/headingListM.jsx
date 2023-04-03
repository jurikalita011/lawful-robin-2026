import { Image,Text,VStack } from "@chakra-ui/react"
function HeadingListM({img,text}){
    return(
        <>
        <VStack>
        <Image  _hover={{cursor: "pointer"}} w='50px' src={img}/>
        <Text fontFamily={'Helvetica'} fontSize='10px'>{text}</Text>
        </VStack>
        </>
    )
}
export default HeadingListM;