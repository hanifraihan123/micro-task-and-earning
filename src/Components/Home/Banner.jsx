
import img1 from "../../assets/image1.jpg";
import img2 from "../../assets/image2.jpg";
import img3 from "../../assets/image3.jpg";
import img4 from "../../assets/image4.jpg";
import img5 from "../../assets/image5.jpg";
import img6 from "../../assets/image6.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Slide from "./Slide";

const Banner = () => {
  return (
    <div className="pt-16">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
      >
        <SwiperSlide><Slide image={img1} text="Unlock Micro Tasks, Earn Big Rewards....!"></Slide></SwiperSlide>
        <SwiperSlide><Slide image={img2} text="From Small Steps to Big Earnings.....!"></Slide></SwiperSlide>
        <SwiperSlide><Slide image={img3} text="Make Every Second Count – Earn Now....!"></Slide></SwiperSlide>
        <SwiperSlide><Slide image={img4} text="Your Gateway to Micro Earning Opportunities!"></Slide></SwiperSlide>
        <SwiperSlide><Slide image={img5} text="Join the Smart Way to Earn Online....!"></Slide></SwiperSlide>
        <SwiperSlide><Slide image={img6} text="Turn Your Free Time into Real Cash....!"></Slide></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
