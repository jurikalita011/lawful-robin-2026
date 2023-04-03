import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import { Card,CardBody, CardFooter, Image, Stack,Text, Button, Box } from '@chakra-ui/react'
import {BsWhatsapp} from "react-icons/bs"
import {TbJewishStar} from "react-icons/tb"
import { useContext } from "react";
import ProductsNav from "../navbar/productsNav";
import axios from "axios";

function SingleProductId() {
  const [data, setData] = useState({});
  const[toggle,setToggle]=useState(true)
  const {id} = useParams();

//   https://good-rose-iguana-cape.cyclic.app/womensAllProducts/${id}
  const getData = async () => {
    try {
      await axios
        .get(`https://good-rose-iguana-cape.cyclic.app/womensAllProducts/${id}`)
        .then((res) => setData(res));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, [id]);


console.log(data)
  const size= [
    "M",
    "S",
    "L",
    "XL",
    "XXL",
    "XXXL"
  ]

  return (
    <>
    <ProductsNav/>
       <Card width="80%"  margin="auto"  height="82vh"
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
>
  <Image
    maxW={{ base: '100%', sm: '511px' }}
    src={data?.data?.poster}
    alt=''
    
  />
  <div style={{marginLeft:"211px"}} >

  </div>

  <Stack   >
    <CardBody   >
    
     <Box textAlign="left" pb={11} >
      <Text pt='3' textAlign="left" fontSize="1.2rem" >
      {data?.data?.stylist}
      </Text>
      <Text fontSize="1.5rem" mb="1.2rem" >
        4 ⭐⭐⭐⭐
      </Text>
          <BsWhatsapp size={28}  />
      <Text fontSize="1.2rem" mt={21} >
         select size
        </Text> 
        <Box  >
          {
            size && size.map((el)=>(
              
                <Button key={el} ml="11px" >{el}</Button>
              
            ))
          }
        </Box>

        
        <Text mt="21" fontSize="1.3rem"  >
          M.R.P. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{":"}
          <del> {data?.data?.originalPrice}  </del>
           
         </Text>
         <Text color={"green"} mt="2" fontSize="1.5rem" >
         {"Price"} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{":"}{data?.data?.newPrice}
         </Text>
         <Text mt="2" fontSize="1.2rem"  >
          You Save &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{":"}  {data?.data?.offer}
         </Text>
        </Box>

    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue' mr="2" p={25} >
        <TbJewishStar/>
      </Button>
      <Box pl="0px" textAlign="left" w="111%" onClick={()=>setToggle(!toggle)} >
  
       {
        //  onClick={()=>addProducts(data) } 
        // onClick={()=>removeProduct(data.id)}
         toggle ? (<Button variant='solid' width="81%"  colorScheme='blue'p={25} >
         ADD TO CART
       </Button>) : (<Button  style={{backgroundColor:"red" }} width="81%"  colorScheme='blue'p={25}  >Remove From Cart</Button>)

       }
       
      
      </Box>
      
    </CardFooter>
  </Stack>
</Card>
    
    
    </>

  );
}
export default SingleProductId;
