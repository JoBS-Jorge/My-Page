import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/jobs-jorge/',
      name: 'Fulano de tal',
      role: 'Serviço de Front-end. otimização de projeto.',
      test: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, et quisquam nostrum non maiores exercitationem porro quod ipsum, similique voluptatum, sequi error distinctio officiis corporis consequuntur quasi sit tempora! Dolores!',
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/jobs-jorge/',
      name: 'Fulano de tal',
      role: 'Serviço de Front-end. otimização de projeto.',
      test: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, et quisquam nostrum non maiores exercitationem porro quod ipsum, similique voluptatum, sequi error distinctio officiis corporis consequuntur quasi sit tempora! Dolores!',
    },
    {
      id: 3,
      link: 'https://www.linkedin.com/in/jobs-jorge/',
      name: 'Fulano de tal',
      role: 'Serviço de Front-end. otimização de projeto.',
      test: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, et quisquam nostrum non maiores exercitationem porro quod ipsum, similique voluptatum, sequi error distinctio officiis corporis consequuntur quasi sit tempora! Dolores!',
    },
    {
      id: 4,
      link: 'https://www.linkedin.com/in/jobs-jorge/',
      name: 'Fulano de tal',
      role: 'Serviço de Front-end. otimização de projeto.',
      test: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, et quisquam nostrum non maiores exercitationem porro quod ipsum, similique voluptatum, sequi error distinctio officiis corporis consequuntur quasi sit tempora! Dolores!',
    },
    {
      id: 5,
      link: 'https://www.linkedin.com/in/jobs-jorge/',
      name: 'Fulano de tal',
      role: 'Serviço de Front-end. otimização de projeto.',
      test: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, et quisquam nostrum non maiores exercitationem porro quod ipsum, similique voluptatum, sequi error distinctio officiis corporis consequuntur quasi sit tempora! Dolores!',
    },
  ];
  return (
    <section id="testimonials">
      <h5>Feedback dos meus Jobs</h5>
      <h2>Testemunhos</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials