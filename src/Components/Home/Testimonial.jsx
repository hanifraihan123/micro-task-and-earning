import { Swiper, SwiperSlide } from "swiper/react";
// import { Parallax, Pagination, Navigation } from "swiper/modules";
import { motion } from "motion/react"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/free-mode';

// import required modules
// import { FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css/effect-coverflow';
import '../Home/styles.css'

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Testimonial = () => {
  return (
    <div className="pt-8">
      <h3 className="font-bold text-3xl text-center text-lime-100">Testimonial</h3>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper my-10"
      >
        <SwiperSlide>
          <div className="bg-slate-100 shadow-xl p-2 rounded-lg">
          <div className="flex gap-2 items-center pb-4">
            <div className="h-12 w-12">
          <img className="rounded-lg" src="https://i.ibb.co.com/SwBcnbS/IMG-20211216-170815.jpg" alt="" />
            </div>
          <h5 className="title text-center"><span className="font-bold">Name:</span> Md Raihan</h5>
          </div>
            <p><span className="font-bold">Experiences: </span> 
            "Micro Task and Earning has been a life-changing experience for me. As a freelancer, I was constantly looking for platforms where I could find quick and reliable gigs."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-slate-100 shadow-xl p-2 rounded-lg">
          <div className="flex gap-2 items-center pb-4">
            <div className="h-12 w-12">
          <img className="rounded-lg" src="https://i.ibb.co.com/Fkd1qHRm/images-9.jpg" alt="" />
            </div>
          <div><span className="font-bold">Name:</span> Priya Mehta</div>
          </div>
            <p><span className="font-bold">Experiences: </span> 
            "Being a college student, it’s hard to find a side hustle that fits into my busy schedule, but Micro Task and Earning made it possible. The platform is user-friendly, they’re engaging and worth the time."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-slate-100 shadow-xl p-2 rounded-lg">
          <div className="flex gap-2 items-center pb-4">
            <div className="h-12 w-12">
          <img className="rounded-lg" src="https://i.ibb.co.com/bMXJw8xz/images-7.jpg" alt="" />
            </div>
          <h5><span className="font-bold">Name:</span> Alex Johnson</h5>
          </div>
            <p><span className="font-bold">Experiences: </span> 
            "Micro Task and Earning has been a life-changing experience for me. As a freelancer, I was constantly looking for platforms where I could find quick and reliable gigs."
            </p>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Testimonial;
