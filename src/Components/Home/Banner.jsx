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
        <SwiperSlide>
          <div className='relative'>
            <img className='object-cover h-[440px] w-full' src={img1} alt="" />
            <h3 className='absolute -mt-[250px] ml-[380px] font-bold text-3xl z-50 text-orange-800'>"Unlock Micro Tasks, Earn Big Rewards!"</h3>
            <p className='absolute -mt-[200px] ml-[450px] font-bold text-xl z-50 text-orange-800'>"Your Journey to Easy Earnings Starts Here!"</p>
            </div>
            </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img className='object-cover h-[440px] w-full' src={img2} alt="" />
            <h3 className='absolute -mt-[250px] ml-[380px] font-bold text-3xl z-50 text-black'>"Complete Tasks. Earn Instantly. Repeat!"</h3>
            <p className='absolute -mt-[200px] ml-[490px] font-bold text-xl z-50 text-black'>"Turn Your Free Time into Real Cash!"</p>
            </div>
            </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img className='object-cover h-[440px] w-full' src={img3} alt="" />
            <h3 className='absolute -mt-[250px] ml-[380px] font-bold text-3xl z-50 text-pink-500'>"Every Task Counts – Start Earning Today!"</h3>
            <p className='absolute -mt-[200px] ml-[490px] font-bold text-xl z-50 text-pink-500'>"Join the Smart Way to Earn Online!"</p>
            </div>
            </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img className='object-cover h-[440px] w-full' src={img4} alt="" />
            <h3 className='absolute -mt-[250px] ml-[380px] font-bold text-3xl z-50 text-black'>"Your Gateway to Micro Earning Opportunities!"</h3>
            <p className='absolute -mt-[200px] ml-[550px] font-bold text-xl z-50 text-black'>"From Small Steps to Big Earnings!"</p>
            </div>
            </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img className='object-cover h-[440px] w-full' src={img5} alt="" />
            <h3 className='absolute -mt-[250px] ml-[380px] font-bold text-3xl z-50 text-red-500'>"Join the Smart Way to Earn Online!"</h3>
            <p className='absolute -mt-[200px] ml-[450px] font-bold text-xl z-50 text-red-500'>"Make Every Second Count – Earn Now!"</p>
            </div>
            </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img className='object-cover h-[440px] w-full' src={img6} alt="" />
            <h3 className='absolute -mt-[250px] ml-[380px] font-bold text-3xl z-50 text-white'>"Simple Tasks, Quick Payouts!"</h3>
            <p className='absolute -mt-[200px] ml-[430px] font-bold text-xl z-50 text-white'>"From Small Steps to Big Earnings!"</p>
            </div>
            </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Banner;