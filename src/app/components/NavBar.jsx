import { FaApple } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { RiShoppingBag3Line } from "react-icons/ri"



const NavBar = () => {
    return ( 
        <nav className="nav_inner">
            <FaApple size={40} color="white" />
            <ul className="nav_flex">
                <li>iPhone</li>
                <li>iPad</li>
                <li>iWatch</li>
                <li>Support</li>
            </ul>
            <div className="nav_icons">
            <AiOutlineSearch size={24} color="white" />
            <RiShoppingBag3Line size={24} color="white" />
            </div>
        </nav>
     );
}
 
export default NavBar;