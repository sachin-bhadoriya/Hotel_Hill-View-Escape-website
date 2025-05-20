import React from 'react'
import '../../../CSSFile/FacilitiesCSS/Facilitiesmain.css'
import the_gym from '../../../../assets/Images/inside/the_gym.jpg'
import pool_side_bar from '../../../../assets/Images/inside/pool_side_bar.jpg'
import the_spa from '../../../../assets/Images/inside/the_spa.jpg'
import swimming_pool from '../../../../assets/Images/inside/swimming_pool.jpg'
import restaurant from '../../../../assets/Images/inside/restaurant.jpg'
import laundary from '../../../../assets/Images/inside/laundary.jpg'

const Facilitiesmain = () => {
    const facilitiiesdetails = [
        { image: the_gym, head: "THE GYM" },
        { image: pool_side_bar, head: "POOL SIDE BAR" },
        { image: the_spa, head: "THE SPA" },
        { image: swimming_pool, head: "SWIMMING POOL" },
        { image: restaurant, head: "RESTAURANT" },
        { image: laundary, head: "LAUNDARY" },
    ];

    return (
        <>
            <div className='container text-center'>
                <h2 data-aos="fade-up" className='facilities-heading'>FACILITIES</h2>
                <p data-aos="fade-up" className='facilities-para'>At Hillview Escape, we offer an exquisite blend of luxury, comfort, and nature. From a scenic infinity pool and rejuvenating spa to gourmet dining, nature trails, and family-friendly spaces — every facility is thoughtfully designed to elevate your stay. Whether you're here to relax, celebrate, or work remotely, our world-class amenities ensure a seamless and memorable experience surrounded by serene hill views and personalized service.</p>
            </div>
            <div className="container facilities-scroll-wrapper">
                {facilitiiesdetails.map((facilitiesdetail, index) => (
                    <div key={index} data-aos="zoom-in" className='faci-main facilities-items the-gym facilities-item'>
                        <img className='the-gym-image facilities-img faci-main-img' src={facilitiesdetail.image} alt="facility" />
                        <h2 className='faci-main-heading the-gym-heading'>{facilitiesdetail.head}</h2>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Facilitiesmain