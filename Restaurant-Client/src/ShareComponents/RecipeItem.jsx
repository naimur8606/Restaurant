import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useCart from '../Hooks/useCart';

const RecipeItem = ({ item }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart()
  const {image, name, recipe, _id, price} = item;

  const handleCart= () =>{
    if(user && user.email){
      const cartItem = {
        menuId: _id,
        email: user?.email,
        image,
        name,
        price
      }
      axiosSecure.post('/carts',cartItem)
      .then(res =>{
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} Added to cart Successfully`,
            showConfirmButton: false,
            timer: 1500
          });
          refetch()
        }
      })
    }else{
      Swal.fire({
        title: "You are not Logged In...!",
        text: "Please login first for add to cart...!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", {state:{location}})
        }
      });
    }
  }

  return (
    <Card>
      <CardMedia
        sx={{ height: 220 }}
        image={image}
        title="green iguana"
      />
      <CardContent className='text-center'>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography className='text-left' variant="body2" color="text.secondary">
          {recipe}
        </Typography>
      </CardContent>
      <CardActions onClick={handleCart} className='flex justify-center'>
        <button className="btn text-[#BB8506] border-0 border-[#BB8506] border-b-4 mt-4 hover:bg-black">Add to Cart</button>
      </CardActions>
    </Card>
  );
};

export default RecipeItem;