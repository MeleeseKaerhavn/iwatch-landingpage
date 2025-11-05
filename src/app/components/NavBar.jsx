import { FaApple } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { RiShoppingBag3Line } from "react-icons/ri"



const NavBar = () => {
    return ( 
        <nav className="nav_inner flex justify-between items-center">
            <FaApple size={40} color="white" />
            <ul className="nav_flex flex gap-8">
                <li className="text-white list-none">iPhone</li>
                <li className="text-white list-none">iPad</li>
                <li className="bg-white text-[#BAD0DD] py-1 px-4 rounded-full">iWatch</li>
                <li className="text-white list-none">Support</li>
            </ul>
            <div className="nav_icons flex gap-8">
            <AiOutlineSearch size={24} color="white" />
            <RiShoppingBag3Line size={24} color="white" />
            </div>
        </nav>
     );
}
 
export default NavBar;