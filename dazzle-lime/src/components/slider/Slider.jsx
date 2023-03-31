import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Image,Box} from "@chakra-ui/react";

export default function SimpleSlider() {
 
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  const sliderData=["https://img1.junaroad.com//assets/images/mobileNotif/img-1678466728484.jpg?crsl_pos=0",
"https://img0.junaroad.com/images/banners/B2G1_13january2023_1673587401792.jpg?crsl_pos=0",
"https://img1.junaroad.com//assets/images/mobileNotif/img-1679910119705.jpg?crsl_pos=0",
"https://img1.junaroad.com//assets/images/mobileNotif/img-1679910400865.jpg?crsl_pos=0",
"https://img1.junaroad.com//assets/images/mobileNotif/img-1676008328934.jpg?crsl_pos=0",
"https://img1.junaroad.com//assets/images/mobileNotif/img-1658918101342.jpg?crsl_pos=0",
"https://img1.junaroad.com//assets/images/mobileNotif/img-1667988209100.jpg?crsl_pos=0",
"https://img1.junaroad.com//assets/images/mobileNotif/img-1667988209100.jpg?crsl_pos=0",
"https://img1.junaroad.com//assets/images/mobileNotif/img-1678875016329.jpg?crsl_pos=0",
"https://img1.junaroad.com//assets/images/mobileNotif/img-1679592536138.jpg?crsl_pos=0",
"https://img1.junaroad.com//assets/images/mobileNotif/img-1673696931249.jpg?crsl_pos=0",
"https://img1.junaroad.com//assets/images/mobileNotif/img-1678466728484.jpg?crsl_pos=0"
]
  return (
    <>
    <Box>
      
      <Slider {...settings}>
        {sliderData.map((el)=><div>
          <Image h='170px' w='1000px' src={el}/>
        </div>)}
      </Slider >
      
    </Box>
    </>
  );
}