import {Box,Center,Image,VStack,Text,Flex} from "@chakra-ui/react"
import styless from "../../styles/TopSlider.module.css"
import SimpleSliderM from "./sliderM"
function TopSm(){
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

function TopSliderM(){
    return(
        <>
        <Center>
        <Box w= '64%'>
          <SimpleSliderM/>
        </Box>
        </Center>
        </>
    )
}
export {TopSliderM,TopSm};
