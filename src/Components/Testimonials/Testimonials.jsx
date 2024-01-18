import React from 'react'
import './Testimonials.css'
import testimonials1 from '../../assets/testimonials1.png'
import testimonials2 from '../../assets/testimonials1.png'
import testimonials4 from '../../assets/testimonials1.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination'; 
import 'swiper/css/navigation'; 
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const Testimonials = () => {

  const data = [
    {
      id: 1,
      avatar: testimonials1,
      name: 'Jeremy',
      review: 'Pawan is a great guy and asset to any team or organisation. He is driven, conscientious, intelligent and good humoured. Pawan is passionate about his chosen career path and actively seeks out new techniques and methods to solve problems.'
    },
    {
      id: 2,
      avatar: testimonials2,
      name: 'Andy Kok',
      review: 'Exceptional commitment to academic excellence and a relentless pursuit of knowledge define this student. Their passion for learning, combined with strong analytical and communication skills, sets them apart. A true asset to any educational institution, demonstrating remarkable dedication and a bright future ahead'
    },
    {
      id: 3,
      avatar: testimonials4,
      name: 'Rajendra',
      review: 'Teaching the MERN stack to this student was a delight; their exceptional grasp of complex concepts and quick adaptability made the process remarkably smooth. Their enthusiasm and active participation in class underscored their natural aptitude for mastering the intricacies of modern web development. A standout learner in every respect.'
    },
  ]


  return (
    <section id='testimonials'>
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>

        <div className="container testimonials_container">

          <Swiper 
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                direction="horizontal" 
                spaceBetween={40} 
                slidesPerView={1}
                pagination={{ clickable: true }}
             
                 scrollbar={{draggable:true}}
              >
              {
              data.map(({avatar,name,review, id})=>{
                return(
                <SwiperSlide key={id} className='testimonials'>
                  <div className="client_avatar">
                    <img src={avatar} alt="firstTestimonials" />
                  </div>
                  <h5 className='client_name'>{name}</h5>
                    <small className='client_review'>{review}</small>
                </SwiperSlide>
                )
              })
            }
            </Swiper>
        </div>
    </section>
  )
}

export default Testimonials