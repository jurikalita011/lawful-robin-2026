import React from "react";
import { useState,useEffect } from "react";
import {Stack,SimpleGrid,Text,useBreakpointValue,Avatar, Center,Image} from "@chakra-ui/react";
import axios from "axios";
import { BsHeart, BsWhatsapp } from "react-icons/bs";

const ProductsHomepage = () => {
  const [data, setData] = useState([]);

  const handleWhatsapp = (link) => {
    window.location.href = link;
  };
  const handleDp = (link) => {
    window.location.href = link;
  };

  const getData = async () => {
    try {
      await axios
        .get(`https://good-rose-iguana-cape.cyclic.app/homepageProducts`)
        .then((res) => setData(res.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Center pt="30px">
    
    <SimpleGrid
      columns={{ base: 1, sm: 2, lg: 3 }}
      w={useBreakpointValue({ base: "100%", lg: "64%" })}
      gap={"15px"}
    >
      {data?.map((el) => (
        <Stack align="flex-start" bg="white" p="12px" key={el.id}>
          <Text pl="7px" fontSize="19px">{el.title}</Text>

            <Image _hover={{cursor: "pointer"}} src={el.poster} alt="poster"/>
          
          <Stack pl="5px" direction="row">
            <Stack align="center">
              <Avatar size="xs" _hover={{cursor: "pointer"}} src={el.stylistDp} onClick={() => handleDp(el.stylistStoryLink)}/>
            </Stack>

            <Stack fontWeight="800" lineHeight="10px" _hover={{cursor: "pointer"}}>
              <Stack direction="row">
                <Text fontSize="13px" opacity="70%" >
                  By
                </Text>
                <Text fontSize="15px">{el.stylist}</Text>
              </Stack>
              <Text fontSize="13px" opacity="70%">
                {el.followers} Followers
              </Text>
            </Stack>
            <Stack position="relative" bottom="40px" direction="row" pl="30px">
              <Stack align="center">
                <Stack
                  _hover={{cursor: "pointer"}}
                  bg="white"
                  w="50px"
                  h="50px"
                  borderRadius="50%"
                  boxShadow="2px 1px 5px 1px"
                  align="center"
                  justify="center"
        
                >
                  <BsHeart color="#D3145A" fontSize="32px" />
                </Stack>
                <Text fontWeight="500" fontSize="11px" opacity="70%">
                  {el.likes} Likes
                </Text>
              </Stack>
              <Stack>
                <Stack align={"center"}>
                  <Stack
                    onClick={() => handleWhatsapp(el.whatsappLink)}
                    align="center"
                    justify="center"
                    _hover={{cursor: "pointer"}}
                    w="50px"
                    bg="white"
                    boxShadow={"2px 1px 5px 1px"}
                    h="50px"
                    borderRadius="50%"
                  >
                    <BsWhatsapp fontSize="32px" color="#9FDA65" />
                  </Stack>
                  <Text fontWeight="500" fontSize="11px" opacity="70%">
                    Share
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      ))}
    </SimpleGrid>
   
    </Center>
  );
};

export default ProductsHomepage;
