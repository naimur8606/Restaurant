import featuredImg from '../../assets/home/featured.jpg';
import SectionTitle from '../../ShareComponents/SectionTitle';
import './home.css'


const Feature = () => {
    return (
        <div className="featured-item bg-cover bg-fixed text-white my-5">
            <div className='bg-slate-500 bg-opacity-60 pt-8 md:my-20'>
            <SectionTitle subHeading="check it out" heading="Featured Item" ></SectionTitle>
            <div className="md:flex justify-center items-center md:pb-20 md:pt-12 lg:px-36 w-[95%] lg:w-full mx-auto">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="mt-5 md:mt-0 md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase text-xl">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita hic dolorem, iusto vel suscipit nam excepturi debitis magnam nostrum! Ut eum dignissimos culpa doloremque eligendi consectetur blanditiis laboriosam fugiat ea quia similique quam nisi reprehenderit numquam magnam nemo vitae cupiditate, atque maiores dicta minus pariatur. Perspiciatis nobis vero quas?</p>
                    <button className="btn btn-outline border-0 border-b-4 my-4">Order Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Feature;