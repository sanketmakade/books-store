import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';


// Import Swiper styles
// import './BookCards.css';
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import{ FaCartShopping }from 'react-icons/fa6'

const BookCards = ({ headline, books }) => {
    return (
        <div className=' my-16 px-4 lg:px-24 '>
            <h2 className='text-5xl text-center font-bold text-black my-5'>  {headline}</h2>
            <div className=' mt-12'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper h-full w-full"
                >

                    {
                        books.map(book => <SwiperSlide key={book._id} className='s2' >

                            <Link to={`/book/${book._id}`}>
                                <div className='relative'>
                                    <img className='IM' src={book.imageURL} alt="" />
                                    <div className=' absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded'> 
                                     <FaCartShopping className=' w-4 h-4 text-white'></FaCartShopping>
                                     </div>
                                </div>
                                <div>
                                    <div>
                                        <h3>{book.bookTitle}</h3>
                                        <p>{book.authorName}</p>
                                    </div>
                                    <div>
                                        <p>
                                            $10.00
                                        </p>
                                    </div>
                                </div>


                            </Link>

                        </SwiperSlide>)
                    }
                </Swiper>

            </div>

        </div>

    )
}

export default BookCards