import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper/modules";
import { motion } from "motion/react"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonial = () => {
  return (
    <div className="bg-green-200 pt-4">
      <motion.h3 animate={{ rotate: 360 }}
            transition={{ duration: 10 }} className="font-bold text-3xl text-center pb-2">Testimonial</motion.h3>
      <Swiper
        style={{
          "--swiper-navigation-color": "blue",
          "--swiper-pagination-color": "blue",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="py-6">
          <div className="title text-center pb-4" data-swiper-parallax="-300"><span className="font-bold">Name:</span> Md Raihan</div>
          <div className="subtitle pb-4" data-swiper-parallax="-200"><motion.img whileHover={{ scale: 1.3 }}
  whileTap={{ scale: 0.95 }} className="h-24 w-24 mx-auto rounded-full" src="https://i.ibb.co.com/SwBcnbS/IMG-20211216-170815.jpg" alt="" /></div>
          <div className="text px-16 pb-4" data-swiper-parallax="-100">
            <p><span className="font-bold">Experiences: </span> 
            "Micro Task and Earning has been a life-changing experience for me. As a freelancer, I was constantly looking for platforms where I could find quick and reliable gigs. What stood out to me was how intuitive the platform is; the tasks are easy to understand, and the earning potential is great."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-6">
          <div className="title text-center pb-4" data-swiper-parallax="-300"><span className="font-bold">Name:</span> Alex Johnson</div>
          <div className="subtitle pb-4" data-swiper-parallax="-200"><motion.img whileHover={{ scale: 1.3 }}
  whileTap={{ scale: 0.95 }} className="h-24 w-24 mx-auto rounded-full" src="https://i.ibb.co.com/bBKbs5n/human-facial-expressions-reaction-body-language.jpg" alt="" /></div>
          <div className="text px-16 pb-4" data-swiper-parallax="-100">
            <p><span className="font-bold">Experiences: </span> 
            "Being a college student, it’s hard to find a side hustle that fits into my busy schedule, but Micro Tak and Earning made it possible. The platform is user-friendly, and the tasks don’t feel like a burden—they’re engaging and worth the time. In just three months, I’ve not only earned money but also gained valuable skills that I can add to my resume."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-6">
          <div className="title text-center pb-4" data-swiper-parallax="-300"><span className="font-bold">Name:</span> Priya Mehta</div>
          <div className="subtitle pb-4" data-swiper-parallax="-200"><motion.img whileHover={{ scale: 1.3 }}
  whileTap={{ scale: 0.95 }} className="h-24 w-24 mx-auto rounded-full" src="https://i.ibb.co.com/cxLDkzX/young-woman-wearing-red-shirt.jpg" alt="" /></div>
          <div className="text px-16 pb-4" data-swiper-parallax="-100">
            <p><span className="font-bold">Experiences: </span> 
            "As a stay-at-home mom, finding flexible and meaningful work has always been a challenge. Micro Tak and Earning has been a game-changer for me. The tasks are straightforward, and I can complete them whenever I find a spare moment. Over the past year, I’ve been able to earn enough to contribute to family expenses, and that feeling of independence is priceless."
            </p>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Testimonial;
