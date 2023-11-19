import { useState } from "react";
import RecipeItem from "./RecipeItem";

const DisplayRecipes = ({menu}) => {
    // const [items, setItems] = useState(menu)
    // const itemNumber = menu.length;
    // const [start, setStart] = useState(0);
    // const [end,setEnd] = useState(9);
    // const showItems = (x) =>{
    //     setEnd(end+x)
    //     setStart(start+x)
    //     setItems(menu?.slice(start+x, end+x))
    // }
    // console.log(itemNumber, items, start, end)
    return (
        <div className="w-[95%] lg:w-full mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
                {
                    menu?.map((item, idx)=> <RecipeItem key={idx} item={item}></RecipeItem> )
                }
            </div>
            {/* <div className="">
                <button onClick={()=> showItems(-9)} className={`${start===0 && "hidden"} btn mr-5`}>Privies</button>
                <button onClick={()=> showItems(9)} className={`${end >= itemNumber && 'hidden'} btn`}>Next</button>
            </div> */}
        </div>
    );
};

export default DisplayRecipes;