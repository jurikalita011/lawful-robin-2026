import {Center, HStack,Spinner} from "@chakra-ui/react";


function Loading(){
    return(
        <>
        <Center>
        <HStack spacing={300} alignItems={"center"} justifyContent={"center"} pl={"650px"} pt={"10px"}>
           <Spinner/> 
           <Spinner/> 
           <Spinner/> 
        </HStack>
        </Center>
        </>
    )
}
export default Loading;