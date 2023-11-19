import { useEffect, useState } from "react";
import SectionTitle from "../../ShareComponents/SectionTitle";
import { Link } from "react-router-dom";
import MenuItem from "../../ShareComponents/MenuItem";

const HomeMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/Recipes/popular`)
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])
    // console.log(menu)
    return (
        <div className="my-5 md:my-10">
            <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check it out"}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-2 w-[95%] lg:w-full mx-auto">
                {
                    menu?.map((item, idx) =><MenuItem key={idx} item={item}></MenuItem> )
                }
            </div>
            <div className="flex justify-center my-3">
                <Link className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</Link>
            </div>
        </div>
    );
};

export default HomeMenu;