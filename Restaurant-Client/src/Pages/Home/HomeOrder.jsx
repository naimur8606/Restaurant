import SectionTitle from "../../ShareComponents/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import slider1 from '../../assets/home/slide1.jpg'
import slider2 from '../../assets/home/slide2.jpg'
import slider3 from '../../assets/home/slide3.jpg'
import slider4 from '../../assets/home/slide4.jpg'
import slider5 from '../../assets/home/slide5.jpg'

const HomeOrder = () => {
    const sliders = [
        { img: slider1, title: "SALADS" },
        { img: slider2, title: "PIZZAS" }, 
        { img: slider3, title: "SOUPS" }, 
        { img: slider4, title: "DESSERTS" }, 
        { img: slider5, title: "SALADS" }
    ]
    const swiperSliders = sliders.map((slider, idx) =>
            <SwiperSlide key={idx}>
                <div className="relative">
                    <img className="w-full" src={slider.img} alt="" />
                    <h4 className="text-center absolute bottom-10 w-full text-xl text-white bg-black bg-opacity-30 shadow">{slider.title}</h4>
                </div>
            </SwiperSlide>
        )
    
    return (
        <div className="my-5 md:my-10">
            <SectionTitle heading={"ORDER ONLINE"} subHeading={"From 11:00am to 10:00pm"}></SectionTitle>

            <div className="w-[97%] lg:w-full mx-auto">
                <div className="lg:hidden">
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={20}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper "
                    >
                        {
                            swiperSliders
                        }

                    </Swiper>
                </div>
                <div className="hidden lg:block">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={20}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper "
                    >
                        {
                            swiperSliders
                        }

                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default HomeOrder;