import { useContext, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { BsPerson, BsPersonX } from "react-icons/bs";
import Swal from "sweetalert2";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { AuthContext } from "../Providers/AuthProvider";
import useCart from "../Hooks/useCart";

const Navbar = () => {
    const location = useLocation()?.pathname
    const { user, logOut } = useContext(AuthContext)
    const [menu, setMenu] = useState(false)
    const [cart, refetch] = useCart()
    console.log(user, user?.photoURL, cart)
    useEffect(()=>{
        refetch()
    },[user?.email, refetch])
    const SignOut = () => {
        logOut()
            .then(
                Swal.fire({
                    title: 'Success!',
                    text: 'Logout Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            )
            .catch(error => {
                Swal.fire({
                    title: 'Warning!',
                    text: `${error.message}`,
                    icon: 'warning',
                    confirmButtonText: 'Ok'
                })
            });
    }

    const navItems =
        <>
            <li>
                <Link
                    onClick={() => setMenu(false)}
                    to="/"
                    className={`${location === '/' ? 'text-[#ffff2c]' : 'lg:text-white'}`}
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    to="/menu"
                    onClick={() => setMenu(false)}
                    className={`${location === '/menu' ? 'text-[#ffff2c]' : 'lg:text-white'}`}
                >
                    Menu
                </Link>
            </li>
            <li>
                <Link
                    to="/order"
                    onClick={() => setMenu(false)}
                    className={`${location === '/order' ? 'text-[#ffff2c]' : 'lg:text-white'}`}
                >
                    Our Shop
                </Link>
            </li>
            <li>
                <Link
                    to="/dashboard/cart"
                    onClick={() => setMenu(false)}
                    className={`${location === '/cart' ? 'text-[#ffff2c]' : 'lg:text-white'} text-xl flex items-center`}
                >
                <FaShoppingCart className="mr-2"></FaShoppingCart><span className="bg-yellow-400 px-1 rounded">+{cart.length}</span>
                </Link>
            </li>
            <li>
            {user ?
                    <div className="flex items-center">
                        {user?.photoURL ? <img className="rounded-[50%] h-8 mr-2" src={user?.photoURL} alt="" /> : <BsPerson className="text-2xl mr-1.5"></BsPerson>}<button onClick={SignOut}>Logout</button>
                    </div> :
                    <div className="flex items-center"><BsPersonX className="text-2xl mr-1.5"></BsPersonX>
                        <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#2c2cff] border border-[#2c2cff] px-3 py-1 rounded-md" : ""
                            }>
                            Login
                        </NavLink>
                    </div>
                }
            </li>
        </>
    return (
        <div className="fixed top-0 z-50 w-full bg-black bg-opacity-50 max-w-6xl mx-auto py-2 md:py-4 px-2 flex justify-between items-center flex-row-reverse lg:flex-row">
            <h4 className="text-2xl text-[#e9f1f9] md:text-4xl font-semibold">
                Restaurant
            </h4>
            <div className="text-2xl lg:hidden text-white">
                {menu ? <AiOutlineClose onClick={() => setMenu(false)}></AiOutlineClose> :
                    <BiMenu onClick={() => setMenu(true)}></BiMenu>}
            </div>
            <ul className={`w-full lg:w-auto lg:space-x-14 space-y-2 lg:space-y-0 text-white text-lg flex flex-col lg:flex-row items-center duration-1000 lg:relative lg:left-0 lg:top-0 absolute  ${menu ? "top-[48px] left-0 bg-[#000] bg-opacity-50 p-3 md:rounded-lg" : "-left-96 top-[48px]"}`}>
                {
                    navItems
                }
            </ul>
        </div>
    );
};

export default Navbar;