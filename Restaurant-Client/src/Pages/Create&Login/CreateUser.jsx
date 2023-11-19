import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { signOut } from "firebase/auth";
import auth from "../../Providers/Firebase/FirebaseConfig";
import Swal from "sweetalert2";
import loginImage from '../../assets/others/authentication1.png'

const CreateUser = () => {
    const { createUser } = useContext(AuthContext);
    const [useAlert, setUseAlert] = useState(true)
    const navigate = useNavigate()
    const formSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const file = e.target.image.files[0]; // Access the first file from the FileList
        const photoUrl = file ? URL.createObjectURL(file) : null;
        const password = e.target.password.value;
        if (!/^(?=.*[a-z])(?!.*[A-Z])(?=.*[0-9]).{6,}$/.test(password)) {
            return console.log("error")
        }
        console.log(email, file, photoUrl)
        createUser(email, password)
            .then(() => {
                signOut(auth)
                const user = { name, email, photoUrl };
                fetch(`http://localhost:5000/users`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            setUseAlert(true)
                        }
                    })
                if (useAlert) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User Created Successfully',
                        icon: 'success',
                        confirmButtonText: 'Yaaah'
                    })
                }
                // navigate("/login")
            })
            .catch(error => {
                Swal.fire({
                    title: 'Warning!',
                    text: `${error.message}`,
                    icon: 'warning',
                    confirmButtonText: 'Ok'
                })
            });
    };
    return (
        <div className="hero min-h-screen">
            <div className="hero-content w-[450px] flex-col lg:flex-row-reverse">
                <img src={loginImage} alt="" />
                <div className="card flex-shrink-0 w-full  shadow-2xl ">
                    <h1 className="text-center text-5xl font-bold">Register now!</h1>
                    <form onSubmit={formSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="file" name="image" placeholder="password" className="" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Create Account</button>
                        </div>
                    </form>
                    <div className="p-8">
                        <p className="text-xl">Have already account <Link to={"/login"} className="text-blue-600 underline">Login</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateUser;