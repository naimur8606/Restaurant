
const MenuItem = ({item}) => {
    return (
        <div className="flex space-x-3">
            <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[100px]" src={item?.image} alt="" />
            <div>
                <h3 className="uppercase text-xl">{item?.name}----------</h3>
                <p>{item?.recipe}</p>
            </div>
            <p className="text-yellow-500">${item?.price}</p>
        </div>
    );
};

export default MenuItem;