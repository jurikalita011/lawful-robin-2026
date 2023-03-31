import { Image,Text,VStack } from "@chakra-ui/react"
function HeadingList({id,img,text}){
    return(
        <>
        <VStack>
        <Image w='50px' src={img}/>
        <Text fontFamily={'Helvetica'} fontSize='10px'>{text}</Text>
        </VStack>
        </>
    )
}
export default HeadingList;