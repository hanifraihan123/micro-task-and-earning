// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/image1.jpg'
import img2 from '../../assets/image2.jpg'
import img3 from '../../assets/image3.jpg'
import img4 from '../../assets/image4.jpg'
import img5 from '../../assets/image5.jpg'
import img6 from '../../assets/image6.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation,Mousewheel,Keyboard } from 'swiper/modules';
// Import Swiper React components

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Banner = () => {

    return (
        <div>
           {/* <Carousel autoPlay={false} infiniteLoop={true} stopOnHover={false} useKeyboardArrows={true}>
    <div className="relative">
      <img className="" alt="" src={img1} />
      <p className="-mt-[420px] ml-[540px] z-50 absolute font-bold text-3xl text-orange-500">Manpower Management</p>
    </div>
    <div className="">
      <img alt="" src={img2} />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img alt="" src={img3} />
      <p className="legend">Legend 3</p>
    </div>
    <div>
      <img alt="" src={img4} />
      <p className="legend">Legend 4</p>
    </div>
    <div>
      <img alt="" src={img5} />
      <p className="legend">Legend 5</p>
    </div>
    <div>
      <img alt="" src={img6} />
      <p className="legend">Legend 6</p>
    </div>
  </Carousel> */}
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
        modules={[Navigation,Autoplay, Pagination, Mousewheel, Keyboard]}
      >
        <SwiperSlide><div><img className='object-cover h-[440px] w-full' src={img1} alt="" /></div></SwiperSlide>
        <SwiperSlide><div><img className='object-cover h-[440px] w-full' src={img2} alt="" /></div></SwiperSlide>
        <SwiperSlide><div><img className='object-cover h-[440px] w-full' src={img3} alt="" /></div></SwiperSlide>
        <SwiperSlide><div><img className='object-cover h-[440px] w-full' src={img4} alt="" /></div></SwiperSlide>
        <SwiperSlide><div><img className='object-cover h-[440px] w-full' src={img5} alt="" /></div></SwiperSlide>
        <SwiperSlide><div><img className='object-cover h-[440px] w-full' src={img6} alt="" /></div></SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Banner;