import { Link } from 'react-router-dom';
import Cover from '../../ShareComponents/Cover';
import MenuItem from '../../ShareComponents/MenuItem';

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className='py-10'>
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-10 w-[97%] lg:w-full mx-auto">
                {
                    items?.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='flex justify-center'>
            <Link to={`/order/${title}`} className="btn btn-outline border-0 border-b-4">
            ORDER YOUR FAVORITE FOOD
            </Link>
            </div>
        </div>
    );
};

export default MenuCategory;