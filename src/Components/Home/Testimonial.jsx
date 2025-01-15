import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonial = () => {
  return (
    <div className="bg-green-200 pt-4">
      <h3 className="font-bold text-3xl text-center pb-2">Testimonial</h3>
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
          <div className="subtitle pb-4" data-swiper-parallax="-200"><img className="h-24 w-24 mx-auto rounded-full" src="https://i.ibb.co.com/SwBcnbS/IMG-20211216-170815.jpg" alt="" /></div>
          <div className="text px-16 pb-4" data-swiper-parallax="-100">
            <p><span className="font-bold">Experiences: </span> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-6">
          <div className="title text-center pb-4" data-swiper-parallax="-300"><span className="font-bold">Name:</span> Md Raihan</div>
          <div className="subtitle pb-4" data-swiper-parallax="-200"><img className="h-24 w-24 mx-auto rounded-full" src="https://i.ibb.co.com/SwBcnbS/IMG-20211216-170815.jpg" alt="" /></div>
          <div className="text px-16 pb-4" data-swiper-parallax="-100">
            <p><span className="font-bold">Experiences: </span> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-6">
          <div className="title text-center pb-4" data-swiper-parallax="-300"><span className="font-bold">Name:</span> Md Raihan</div>
          <div className="subtitle pb-4" data-swiper-parallax="-200"><img className="h-24 w-24 mx-auto rounded-full" src="https://i.ibb.co.com/SwBcnbS/IMG-20211216-170815.jpg" alt="" /></div>
          <div className="text px-16 pb-4" data-swiper-parallax="-100">
            <p><span className="font-bold">Experiences: </span> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Testimonial;
