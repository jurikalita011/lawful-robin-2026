import {Box,Center,Image,VStack,Text,Flex} from "@chakra-ui/react"
import styless from "../../styles/TopSlider.module.css"
import SimpleSlider from "./Slider"
function TopS(){
    return(
        <>
        <Center>
        <Box className={styless.box} >
  <Flex>
  <Image src='https://img0.junaroad.com/images/icons/130440_discount.gif' className={styless.gif}/>
  <VStack spacing={1}>
    <Text className={styless.textT}>Pay Online & Get Flat 10% Off</Text>
    <Text className={styless.textB}>Paytm, Gpay, PhonePe, Net Banking, Debit & Credit Cards</Text>
  </VStack>
  </Flex>
</Box>
</Center>
        </>
    )
}

function TopSlider(){
    return(
        <>
        <Center>
        <Box w= '64%'>
          <SimpleSlider/>
        </Box>
        </Center>
        </>
    )
}
export {TopSlider,TopS};
