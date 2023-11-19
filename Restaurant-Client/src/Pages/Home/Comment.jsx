import chef from "../../assets/home/chef-service.jpg"

const Comment = () => {
    return (
        <div className="relative my-5 md:my-12">
            <img className="h-[155px] md:h-[280px] lg:h-[400px] 2xl:h-[550px] w-full" src={chef} alt="" />
            <div className="h-[155px] md:h-[280px] lg:h-[400px] 2xl:h-[550px] absolute top-0 flex  items-center ">
                <div className="w-[95%] md:w-3/4 mx-auto text-center bg-[#ffffffb3] p-2 md:p-10 lg:p-20">
                    <h3 className="text-2xl md:text-5xl md:mb-5">Boss Restaurant</h3>
                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa esse corporis accusantium et? Nisi nulla quae excepturi a error sint repellendus placeat eveniet eligendi, magnam ducimus, sapiente.</p>
                </div>
            </div>
        </div>
    );
};

export default Comment;