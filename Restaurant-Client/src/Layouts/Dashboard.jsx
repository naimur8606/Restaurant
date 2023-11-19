import { FaAd, FaCalculator, FaHome, FaList, FaListAlt, FaShoppingBasket, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";


const Dashboard = () => {
    const [cart] = useCart()
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <ul className="menu p-4">
                    <li className="flex space-x-2 items-center">
                        <NavLink to={"/dashboard/cart"}><FaShoppingCart></FaShoppingCart>My Cart({cart.length})</NavLink>
                    </li>
                    <li><NavLink to={"/dashboard/userHome"}><FaHome></FaHome>User Home</NavLink></li>
                    <li><NavLink to={"/dashboard/reservation"}><FaCalculator></FaCalculator>Reservation</NavLink></li>
                    <li><NavLink to={"/dashboard/review"}><FaAd></FaAd>Add Review</NavLink></li>
                    <li><NavLink to={"/dashboard/bookings"}><FaList></FaList>My Bookings</NavLink></li>
                    <p className="divider"></p>
                    <li><NavLink to={"/"}><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to={"/menu"}><FaListAlt></FaListAlt>Menu</NavLink></li>
                    <li><NavLink to={"/order"}><FaShoppingBasket></FaShoppingBasket>Our Shop</NavLink></li>
                </ul>
            </div>
            <div className="p-8 w-full">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;