import React from 'react'
import '../../CSSFile/NewNavbar.css'
import { useEffect, useState } from "react";
// import "../../CSSFile/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import menu from '../../../assets/Images/icons/menu.png'
import cross from '../../../assets/Images/icons/close.png'



const NewNavbar = () => {
    let menuicon = document.getElementById('menuicon')
    let closeicon = document.getElementById('closeicon')

    const [showBox, setShowBox] = useState(false);
    const [showMenu, setshowMenu] = useState(true);
    const [showClose, setshowClose] = useState(false);


    function clickonmenubar() {
        setShowBox(true);
        setshowClose(true)
        setshowMenu(false)

    }
    function clickonclosebar() {
        setShowBox(false);
        setshowMenu(true)
        setshowClose(false)

    }


    const location = useLocation();
    // useEffect(() => {
    //     console.log(location.pathname)
    // }, [location]);
    return (
        <>

            {/* laptop nav */}
            <div className="active navbar_container_main">
                <div className='navbar container'>
                    <div className="tittle">HillView Escape</div>
                    <ul>
                        <li><Link className={location.pathname === '/' ? 'link-active' : 'link-deactive'} to="/">Home</Link></li>
                        <li><Link className={location.pathname === '/Facilities' ? 'link-active' : 'link-deactive'} to="/Facilities">Facilities</Link></li>
                        <li><Link className={location.pathname === '/Rooms' ? 'link-active' : 'link-deactive'} to="/Rooms">Rooms</Link></li>
                    </ul>
                    <Link to="/Contact"><button>Contact</button></Link>
                </div>
            </div>



            <div className="active mobile_navbar_container_main">
                <div className='mobile_navbar container'>
                    <div className="show_element_nav">
                        <div className="tittle">HillView Escape</div>
                        <div className='menu_icon_mobile_nav' ><img  className={showMenu ? 'show' : 'hide'} id='menuicon' onClick={clickonmenubar} src={menu} /></div>
                        <div className='close_icon_mobile_nav' ><img  className={showClose ? 'show' : 'hide'} id='closeicon' onClick={clickonclosebar} src={cross} /></div>
                    </div>
                    <div    className={` ${showBox ? 'show' : 'hide'} text-center`}>
                        <ul>
                            <li><Link onClick={clickonclosebar} className={location.pathname === '/' ? 'link-active' : 'link-deactive'} to="/">Home</Link></li>
                            <li><Link onClick={clickonclosebar} className={location.pathname === '/Facilities' ? 'link-active' : 'link-deactive'} to="/Facilities">Facilities</Link></li>
                            <li><Link onClick={clickonclosebar} className={location.pathname === '/Rooms' ? 'link-active' : 'link-deactive'} to="/Rooms">Rooms</Link></li>
                        </ul>
                       <Link onClick={clickonclosebar} to="/Contact"> <button>Contact</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewNavbar