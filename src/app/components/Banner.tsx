'use client'
import dynamic from "next/dynamic";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
 import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const Slider = dynamic(() => import("react-slick"), { ssr: false });
type ArrowProps = {
    onClick?: () => void; // Optional because `onClick` might not always be passed
  };
function SampleNextArrow(props:ArrowProps) {
  const { onClick } = props;
  return (
    <div
      className="w-44 h-8 absolute bottom-32 z-30 right-10 border-[1px] border-gray-900 px-2 hover:border-gray-800 bg-black/50 hover:bg-black shadow-btnShadow overflow-hidden"
      onClick={onClick}
    >
      <div className="w-full h-full text-gray-300 text-sm uppercase relative flex items-center justify-end cursor-pointer group  ">
        <span className="absolute -translate-x-28 translate-y-0 group-hover:-translate-y-7 transition-transform duration-500">
          next
        </span>
        <span className="absolute -translate-x-28 translate-y-7 group-hover:translate-y-0 transition-transform duration-500">
          next
        </span>
        <span className="text-lg">
          <FaChevronRight />
        </span>
      </div>
    </div>
  );
}

function SamplePrevArrow(props:ArrowProps) {
  const { onClick } = props;
  return (
    <div
      className="w-44 h-8 absolute bottom-32 z-30 left-10 border-[1px] border-gray-900 px-2 hover:border-gray-800 bg-black/50 hover:bg-black shadow-btnShadow overflow-hidden"
      onClick={onClick}
    >
      <div className="w-full h-full text-gray-300 text-sm uppercase relative flex items-center justify-between cursor-pointer group  ">
        <span className="text-lg">
          <FaChevronLeft />
        </span>
        <span className="absolute translate-x-24 translate-y-0 group-hover:-translate-y-7 transition-transform duration-500">
          previous
        </span>
        <span className="absolute translate-x-24 translate-y-7 group-hover:translate-y-0 transition-transform duration-500">
          previous
        </span>
      </div>
    </div>
  );
}

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  
   
    return (
        <div className="w-full h-[650px] relative">
          <Slider {...settings}>
            <div className="relative w-full h-[650px]">
              <Image
                className="object-cover"
                src="/images/bannerImgOne.jpg"
                alt="Banner Image One"
                fill
                priority
              />
            </div>
            <div className="relative w-full h-[650px]">
              <Image
                className="object-cover"
                src="/images/bannerImgTwo.jpg"
                alt="Banner Image Two"
                fill
              />
            </div>
            <div className="relative w-full h-[650px]">
              <Image
                className="object-cover"
                src="/images/bannerImgThree.jpg"
                alt="Banner Image Three"
                fill
              />
            </div>
            <div className="relative w-full h-[650px]">
              <Image
                className="object-cover"
                src="/images/bannerImgFour.jpg"
                alt="Banner Image Four"
                fill
              />
            </div>
          </Slider>
          
        </div>
      );
    };
    
    export default Banner;
    