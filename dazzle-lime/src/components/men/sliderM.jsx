import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Image,Box} from "@chakra-ui/react";

export default function SimpleSliderM() {
 
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  const sliderDataMen=["https://img0.junaroad.com/images/banners/B2G1_01april2023_1680345688588.jpg?crsl_pos=0",
"https://img1.junaroad.com//assets/images/mobileNotif/img-1679910119705.jpg?crsl_pos=0",
"https://img1.junaroad.com//assets/images/mobileNotif/img-1679910119705.jpg?crsl_pos=0",
"https://img1.junaroad.com//assets/images/mobileNotif/img-1676008328934.jpg?crsl_pos=0",
"https://img1.junaroad.com//assets/images/mobileNotif/img-1676008328934.jpg?crsl_pos=0",
"https://img1.junaroad.com//assets/images/mobileNotif/img-1667388470485.jpg?crsl_pos=0",
"https://img1.junaroad.com//assets/images/mobileNotif/img-1667988209100.jpg?crsl_pos=0",
"https://img1.junaroad.com//assets/images/mobileNotif/img-1667988209100.jpg?crsl_pos=0",
"https://img1.junaroad.com//assets/images/mobileNotif/img-1651469168362.jpg?crsl_pos=0",
"https://img1.junaroad.com//assets/images/mobileNotif/img-1674029296684.jpg?crsl_pos=0",
"https://img1.junaroad.com//assets/images/mobileNotif/img-1677239926933.jpg?crsl_pos=0",
"https://img1.junaroad.com//assets/images/mobileNotif/img-1676438894037.jpg?crsl_pos=0",
"https://img1.junaroad.com//assets/images/mobileNotif/img-1680293166524.jpg?crsl_pos=0"
]
  return (
    <>
    <Box>
      
      <Slider {...settings}>
        {sliderDataMen.map((el)=><div>
          <Image h='170px' w='1000px' src={el}/>
        </div>)}
      </Slider >
      
    </Box>
    </>
  );
}