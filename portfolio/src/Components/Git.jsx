import React from "react";
import "../assets/git.css";
import { Swiper, SwiperSlide } from "swiper/react";
import GitHubCalendar from 'react-github-calendar';
import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
const Git = () => {
  

  return (
    <section className="testimonials container section">
      <h2 className="section__title">Github Stats</h2>

      <Swiper
        className="testimonial__container grid"
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        cssMode={true}
        navigation={true}
        // spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
            
            <SwiperSlide className="testimonial__item">
              <img id="github-streak-stats" className="imgs" src="https://github-readme-streak-stats.herokuapp.com/?user=Devarshi-Chhadiya2211&theme=transparent" alt="GitHub Streak Stats" />
            </SwiperSlide>
            <SwiperSlide className="testimonial__item">
              <div className="thumb">
               <GitHubCalendar username="Devarshi-Chhadiya2211"/>
              </div>
            </SwiperSlide>
            <SwiperSlide className="testimonial__item imgs1">
               <img id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=Devarshi-Chhadiya2211&theme=transparent&show_icons=true&locale=en" alt="GitHub Stats Card" />
            </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Git;