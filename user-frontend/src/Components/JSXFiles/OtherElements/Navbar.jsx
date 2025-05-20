import { useEffect, useState } from "react";
import "../../CSSFile/Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

    const [showBox, setShowBox] = useState(false);


    function clickonmenubar() {
        console.log('clicked!');
        setShowBox(prevState => !prevState);

    }

    const location = useLocation();
    useEffect(() => {
        // console.log(location.pathname)
    }, [location]);


    return (
        <>
            <div className="laptop-view-navbar">
                <ul className='navbarlist laptop-view'>
                    <li>
                        Hillview Escape
                    </li>
                    <li>
                        <Link className={location.pathname === '/' ? 'link-active' : 'link-deactive'} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className={location.pathname === '/Facilities' ? 'link-active' : 'link-deactive'} to="/Facilities">Facilities</Link>
                    </li>
                    <li>
                        <Link className={location.pathname === '/Rooms' ? 'link-active' : 'link-deactive'} to="/Rooms">Rooms</Link>
                    </li>
                    <li>
                        <Link className={location.pathname === '/Contact' ? 'link-active' : 'link-deactive'} to="/Contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="mobile-view-navbar">
                <div className="mobile-view">
                    Hillview Escape
                    <i className="fa-solid fa-bars mobile-nav-icon" onClick={clickonmenubar}></i>
                    <ul className={showBox ? 'mobile-view-navbar-show' : 'mobile-view-navbar-hidden'}>
                        <li>
                            <Link className={location.pathname === '/' ? 'link-active' : 'link-deactive'} to="/">Home</Link>
                        </li>
                        <li>
                            <Link className={location.pathname === '/Facilities' ? 'link-active' : 'link-deactive'} to="/Facilities">Facilities</Link>
                        </li>
                        <li>
                            <Link className={location.pathname === '/Rooms' ? 'link-active' : 'link-deactive'} to="/Rooms">Rooms</Link>
                        </li>
                        <li>
                            <Link className={location.pathname === '/Contact' ? 'link-active' : 'link-deactive'} to="/Contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar