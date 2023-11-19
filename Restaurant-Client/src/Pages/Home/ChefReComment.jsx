import { useEffect, useState } from "react";
import SectionTitle from "../../ShareComponents/SectionTitle";
import RecipeItem from "../../ShareComponents/RecipeItem";


const ChefReComment = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/Recipes/offered`)
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])
    console.log(menu)
    return (
        <div className="my-5 md:my-10 w-[95%] lg:w-full mx-auto">
            <SectionTitle heading={'CHEF RECOMMENDS'} subHeading={'Should Try'}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    menu?.slice(0,3)?.map((item, idx)=> <RecipeItem key={idx} item={item}></RecipeItem> )
                }
            </div>
        </div>
    );
};

export default ChefReComment;