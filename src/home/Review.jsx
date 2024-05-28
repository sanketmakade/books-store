 
import React, { useRef, useState } from 'react';
import { Avatar } from 'flowbite-react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {FaStar} from "react-icons/fa6"
import proPic from "../assets/profile.jpg"
import pro1 from "../assets/P1.jpg"
import pro2 from "../assets/P2.jpg"
import pro3 from "../assets/P3.jpg"
import pro4 from "../assets/P4.jpg"
import pro5 from "../assets/P5.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'> 
    <h2 className=' text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>

    <div>
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className=' shadow-2xl bg-slate-50 py-8 px-4 md:m-5 rounded-lg border'> 
            <div className=' space-y-6'>
                <div className=' text-amber-500 flex gap-2'>
                 <FaStar></FaStar>
                 <FaStar></FaStar>
                 <FaStar></FaStar>
                 <FaStar></FaStar>
                </div>
                <div className=' mt-7'>
                    <p className=' mb-5'>I've made multiple purchases on this website, and each time, the process has been smooth and hassle-free. The shipping is quick, and the books arrive in excellent condition. I appreciate the attention to detail and commitment to customer satisfaction. Highly recommended!"

                   </p>
                    <Avatar img= {pro1} alt="avatar of Jese" rounded className=' w-10 mb-4' />
                    <h5 className=' text-lg font-medium'>Miles Turner </h5>
                    <p className=' text-base'>Travel Blogger</p>
                </div>
            </div>
        </SwiperSlide>


        <SwiperSlide className=' shadow-2xl bg-slate-50 py-8 px-4 md:m-5 rounded-lg border'> 
            <div className=' space-y-6'>
                <div className=' text-amber-500 flex gap-2'>
                 <FaStar></FaStar>
                 <FaStar></FaStar>
                 <FaStar></FaStar>
                 <FaStar></FaStar>
                </div>
                <div className=' mt-7'>
                    <p className=' mb-5'>The discounts and promotions on this website are fantastic, making it a go-to for budget-friendly book shopping. However, I've noticed that the mobile version could use some optimization for a smoother experience. A mobile app would be a great addition to enhance accessibility."

                    </p>
                    <Avatar img= {pro2} alt="avatar of Jese" rounded className=' w-10 mb-4' />
                    <h5 className=' text-lg font-medium'>Marcus Bennett </h5>
                    <p className=' text-base'>Fitness Trainer</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className=' shadow-2xl bg-slate-50 py-8 px-4 md:m-5 rounded-lg border'> 
            <div className=' space-y-6'>
                <div className=' text-amber-500 flex gap-2'>
                 <FaStar></FaStar>
                 <FaStar></FaStar>
                 <FaStar></FaStar>
                 <FaStar></FaStar>
                </div>
                <div className=' mt-7'>
                    <p className=' mb-5'>The selection on this website is impressive, covering everything from bestsellers to niche genres. However, I've noticed a slight lag when loading certain pages. It doesn't impact the overall experience significantly, but a faster browsing speed would be a welcome improvement."</p>
                    <Avatar img= {pro3} alt="avatar of Jese" rounded className=' w-10 mb-4' />
                    <h5 className=' text-lg font-medium'>Rachel Patel</h5>
                    <p className=' text-base'>Graphic Designer</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className=' shadow-2xl bg-slate-50 py-8 px-4 md:m-5 rounded-lg border'> 
            <div className=' space-y-6'>
                <div className=' text-amber-500 flex gap-2'>
                 <FaStar></FaStar>
                 <FaStar></FaStar>
                 <FaStar></FaStar>
                 <FaStar></FaStar>
                </div>
                <div className=' mt-7'>
                    <p className=' mb-5'>This website is a bookworm's dream come true. The layout is intuitive, making it easy to navigate through the vast collection of titles. I appreciate the detailed book descriptions and customer reviews, helping me make informed decisions. Plus, the checkout process is seamless. I'm hooked!"</p>
                    <Avatar img= {pro4} alt="avatar of Jese" rounded className=' w-10 mb-4' />
                    <h5 className=' text-lg font-medium'>David Chang </h5>
                    <p className=' text-base'>Financial Analyst</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className=' shadow-2xl bg-slate-50 py-8 px-4 md:m-5 rounded-lg border'> 
            <div className=' space-y-6'>
                <div className=' text-amber-500 flex gap-2'>
                 <FaStar></FaStar>
                 <FaStar></FaStar>
                 <FaStar></FaStar>
                 <FaStar></FaStar>
                </div>
                <div className=' mt-7'>
                    <p className=' mb-5'>I stumbled upon this website while searching for a rare title, and it exceeded my expectations. The variety of books is outstanding, and the ease of ordering is a breath of fresh air. They even have a wishlist feature that lets me keep track of books I plan to purchase in the future. A must-visit for avid readers!"

                 </p>
                    <Avatar img= {pro5} alt="avatar of Jese" rounded className=' w-10 mb-4' />
                    <h5 className=' text-lg font-medium'>Emily Rodriguez</h5>
                    <p className=' text-base'>Marketing Specialist</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className=' shadow-2xl bg-slate-50 py-8 px-4 md:m-5 rounded-lg border'> 
            <div className=' space-y-6'>
                <div className=' text-amber-500 flex gap-2'>
                 <FaStar></FaStar>
                 <FaStar></FaStar>
                 <FaStar></FaStar>
                 <FaStar></FaStar>
                </div>
                <div className=' mt-7'>
                    <p className=' mb-5'>I love how easy it is to find what I'm looking for on this website. The search functionality is robust, and the book recommendations are surprisingly accurate. The blog section also provides insightful reviews and author interviews, adding an extra layer to the overall book-buying experience."

                    </p>
                    <Avatar img= {proPic} alt="avatar of Jese" rounded className=' w-10 mb-4' />
                    <h5 className=' text-lg font-medium'>John Miller </h5>
                    <p className=' text-base'>Software Developer</p>
                </div>
            </div>
        </SwiperSlide>


        
      </Swiper>
    </div>
    </div>
  )
}

export default Review