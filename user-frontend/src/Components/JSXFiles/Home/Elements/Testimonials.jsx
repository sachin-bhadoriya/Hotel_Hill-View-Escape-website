// TestimonialsPage.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../../CSSFile/HomeCSS/Testimonials.css";
import person1 from '../../../../assets/Images/inside/person1.jpg'
import person2 from '../../../../assets/Images/inside/person2.jpg'
import person3 from '../../../../assets/Images/inside/person3.jpg'
import person4 from '../../../../assets/Images/inside/person4.jpg'
import person5 from '../../../../assets/Images/inside/person5.jpg'
import person6 from '../../../../assets/Images/inside/person6.jpg'




const Testimonials = () => {
  const testimonials = [
    {image: person1, name: "Raj", message: "From the moment we arrived, everything felt straight out of a dream. The infinity pool with hill view was surreal, and the candlelight dinner setup was the most romantic thing ever. We’re already planning our next visit!" },
    {image: person2, name: "Vikram", message: "If you're looking to escape the city chaos, Hillview Escape is the place. The staff is super courteous, the rooms are spotless, and the spa massage? 10/10 relaxation. Total paisa vasool!" },
    {image: person3, name: "Amit", message: "Stunning views, luxurious rooms, and a vibe you can't describe in words. I stayed in the Presidential Suite — felt like a king. Even the food was gourmet level!" },
    {image: person4, name: "Neha", message: "Clean rooms, fresh air, top-class service. What more can you ask for? Loved the early morning nature walk arranged by the staff. So peaceful and refreshing!" },
    {image: person5, name: "Simran", message: "We visited with kids and parents — everyone had a blast! Kids loved the play area, and my parents were so relaxed after the spa treatment. Room service was quick and the food was excellent." },
    {image: person6, name: "Pooja", message: "I worked remotely from Hillview Escape for 5 days — fast Wi-Fi, peaceful view from the balcony, and great food delivered to the room. Better than any co-working space." },
  ];

  const latestTestimonials = testimonials.slice(-5).reverse();

  return (
    <div data-aos="zoom-in" className="testimonial-wrapper">
      <h2 className="testimonial-heading"><span>Testimonials</span></h2>
      <Swiper
        modules={[ Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 30000 }}
        loop={true}
        slidesPerView={1}
        spaceBetween={30}
      >
        {latestTestimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <div className="testimonial-image-box"><div className="testimonial-image"><img src={testimonial.image} /></div></div>
              <p className="testimonial-message">“{testimonial.message}”</p>
              <p className="testimonial-name">— {testimonial.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
