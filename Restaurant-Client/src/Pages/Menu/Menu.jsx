import { Helmet } from 'react-helmet-async';
import menuImage from '../../assets/menu/banner3.jpg'
import Cover from '../../ShareComponents/Cover';
import { useEffect, useState } from 'react';
import SectionTitle from '../../ShareComponents/SectionTitle';
import MenuCategory from './MenuCategory';
import soupImg from '../../assets/menu/soup-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import offerdImg from '../../assets/menu/dessert-bg.jpeg'

const Menu = () => {
    const [menu, setMenu] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/Recipes")
        .then(res => res.json())
        .then(data => setMenu(data))
    },[])
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>BOOS | Menu</title>
            </Helmet>
            <Cover img={menuImage} title="our menu"></Cover>
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            <MenuCategory items={desserts} title="dessert" img={dessertImg}></MenuCategory>
            <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
            <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
            <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
            <MenuCategory items={offered} title={"soup"} img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;