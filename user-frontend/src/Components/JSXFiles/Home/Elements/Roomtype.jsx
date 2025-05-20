import React from 'react'
import '../../../CSSFile/HomeCSS/Roomtype.css'
import presidential from '../../../../assets/Images/inside/presidential2.jpg'
import Luxury_Villa from '../../../../assets/Images/inside/Luxury_Villa.jpg'
import Deluxe_Room from '../../../../assets/Images/inside/Deluxe_Room.jpg'
import Superior_Room from '../../../../assets/Images/inside/Superior_Room.jpg'
import Budget_Premium from '../../../../assets/Images/inside/Budget_Premium.jpg'




const Roomtype = () => {
  const Roomvar = [
    { head: "1.Presidential Suite", image: presidential, para: "Experience royalty with unmatched luxury. This top-tier suite comes with a private jacuzzi, butler service, and a breathtaking hill view — perfect for honeymooners or VIP guests. Includes: King-size bed, Private Jacuzzi, Balcony with View, Smart TV, Mini Bar, 24/7 Butler Service" },
    { head: " 2. Luxury Villa", image: Luxury_Villa, para: "A private villa surrounded by nature, ideal for families or couples who crave space, privacy, and elegance. Includes: 2 Bedrooms, Living Area, Private Garden, Modern Kitchenette, Outdoor Seating Area." },
    { head: "3. Deluxe Room", image: Deluxe_Room, para: "Elegant, cozy, and perfect for a peaceful stay. Offers scenic balcony views and all modern comforts. Includes: Queen-size bed, Balcony, Air Conditioning, Flat-screen TV, Tea/Coffee Maker" },
    { head: " 4. Superior Room", image: Superior_Room, para: "Functional and stylish, this room is perfect for business travelers or weekend guests looking for comfort at a great price. Includes: Twin/Queen bed options, Workspace, Wi-Fi, Room Service" },
    { head: "5. Budget Premium Room", image: Budget_Premium, para: "Affordable luxury done right. A compact room with smart space use and premium facilities. Includes: Double bed, LED TV, Complimentary Water, Clean Modern Washroom, In-room Dining" },
  ]

  return (
    <>

      <div data-aos="fade-up" className="container">
      <h2 data-aos="fade-up" className='facilities-heading text-center'>ROOM TYPES</h2>
        {Roomvar.map((item, index) => (
          <div data-aos="fade-up" className="row room_type_container_main" key={index}>
            <div className="col-6 d-flex">
              <div className="txt_room_type">
                <h2 className='Balthazar room_type_heading_main_rooms'>{item.head}</h2>
                <br />
                <p>{item.para}</p>
              </div>
            </div>
            <div className="col-6 hover-zoom room_type_image_container">
              <img src={item.image} />
            </div>
          </div>
        ))}
      </div>

    </>
  )
}

export default Roomtype
