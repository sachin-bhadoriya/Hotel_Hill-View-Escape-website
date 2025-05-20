import React from 'react'
import '../../../CSSFile/RoomCSS/Roomtype.css'
import single_room from '../../../../assets/Images/inside/single_room.jpg'
import double_room from '../../../../assets/Images/inside/double_room.jpg'
import twin_room from '../../../../assets/Images/inside/twin_room.jpeg'




const Roomtype = () => {
    const Roomtypedetails = [
        {image: single_room, head: "SINGLE ROOM", mainheading: "VIEW ROOM DETAILS", rate: '$180/Night' },
        {image: double_room, head: "DOUBLE ROOM", mainheading: "VIEW ROOM DETAILS", rate: '$150/Night' },
        {image: twin_room, head: "TWIN ROOM", mainheading: "VIEW ROOM DETAILS", rate: '$150/Night' },
     ]; 
    //   for reversing items
    //  const latestRoomtypedetails = Roomtypedetails.reverse();

    return (
        <>
            <div className="container">
            {Roomtypedetails.map((Roomtypedetail, index) => (
                <div  key={index} data-aos="zoom-in" className='single_room room_images_type'>
                    <img className='room_images_type_image' src={Roomtypedetail.image} alt="image" />
                    <h1 className='text-center room_details_heading'>{Roomtypedetail.head}</h1>
                    <div className="row text-center container room_images_type_container">
                        <h3 className='room_images_type_headingmin'>View Room Detail</h3>
                        <button className='room_images_type_btn'>{Roomtypedetail.rate}</button>
                    </div>
                </div>
            ))};                
            </div>
        </>
    )
}

export default Roomtype