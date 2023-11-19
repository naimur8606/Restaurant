import { Helmet } from "react-helmet-async";
import shopImage from '../../assets/shop/banner2.jpg'
import Cover from "../../ShareComponents/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link, useLocation } from "react-router-dom";
import DisplayRecipes from "../../ShareComponents/DisplayRecipes";
import { useEffect, useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const OurShop = () => {
    const location = useLocation()?.pathname
    const [menu, setMenu] = useState([])
    const [count, setCount] = useState(0)
    const [category, setCategory] = useState('all')
    const totalPages = Math.ceil(count / 9)
    console.log(totalPages, menu)
    const pages = [...Array(totalPages).keys()];
    console.log(pages)
    const [currentPage, setCurrentPage] = useState(0)
    useEffect(() => {
        fetch(`http://localhost:5000/Recipes/${category}?page=${currentPage}&size=${9}`)
            .then(res => res.json())
            .then(data => {
                setMenu(data)
            })
    }, [category, currentPage])
    useEffect(() => {
        fetch(`http://localhost:5000/RecipesCount/${category}`)
            .then(res => res.json())
            .then(data => {
                setCurrentPage(0)
                setCount(data?.count)
            })
    }, [category])
    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    const nextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    }
    return (
        <div>
            <Helmet>
                <title>BOOS | Our Shop</title>
            </Helmet>
            <Cover img={shopImage} title="our Shop"></Cover>
            <Tabs className='my-5 md:my-10'>
                <TabList className='space-x-5 flex text-xl font-medium justify-center'>
                    <Tab onClick={()=>setCategory('all')} className={`${location === '/order' ? 'border-b-2' : 'border-none' } px-2`}>
                        <Link to={'/order'}>All</Link>
                    </Tab>
                    <Tab onClick={()=>setCategory('pizza')} className={`${location === '/order/pizza' ? 'border-b-2' : 'border-none' } px-2`}>
                        <Link to={'/order/pizza'}>Pizza</Link>
                    </Tab>
                    <Tab onClick={()=>setCategory('salad')} className={`${location === '/order/salad' ? 'border-b-2' : 'border-none' } px-2`}>
                        <Link to={'/order/salad'}>Salad</Link>
                    </Tab>
                </TabList>

                <TabPanel>
                    <DisplayRecipes menu={menu}></DisplayRecipes>
                </TabPanel>
                <TabPanel>
                    <DisplayRecipes menu={menu}></DisplayRecipes>
                </TabPanel>
                <TabPanel>
                    <DisplayRecipes menu={menu}></DisplayRecipes>
                </TabPanel>
            </Tabs>
            <div className="space-x-3 my-5">
                    <button onClick={prevPage} className="btn"><BiLeftArrow></BiLeftArrow></button>
                    {
                        pages.map(page => <button
                            className={currentPage === page ? 'selected bg-[#009fe2] text-white p-1' : undefined}
                            onClick={() => setCurrentPage(page)}
                            key={page}
                        >{page}</button>)
                    }
                    <button onClick={nextPage} className="btn"><BiRightArrow></BiRightArrow></button>
                </div>
        </div>
    );
};

export default OurShop;