import {useState} from "react"
import authservice from "../Appwrite/auth"
import {Link, useNavigate} from "react-router-dom"
import {login} from "../../store/authSlice"
import {Button,Input,Logo} from "../components"
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"


function Signup()
{
    const navigate = useNavigate();
    const [error,setError]=useState("");
    const dispatch = useDispatch();
    const {register,handleSubmit} = useForm();

    const create = async(data)=>{
        setError("");
        try {
        const userData= await authservice.createAccount(data);
        if(userData)
        {
            const User= await authservice.getCurrentUser();
            if(User)
                { 
                    dispatch(login(userData));
                    navigate("/");
                }

        }
        } catch (error) {
            setError(error?.message || "Something went wrong. Please try again.");
        }
    }


    return (
    <div className="container min-h-screen flex items-center justify-center bg-orange-100 dark:bg-gray-900 px-4 mt-[-100px]">
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md mt-4">
        <div className="flex justify-center mb-4">
            <span>
            <Logo />
            </span>
        </div>
    
        <h2 className="text-2xl font-bold text-center text-blue-700 dark:text-blue-300 mb-2">
            Create A new Account
        </h2>
    
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-4">
            Already have an account?
            <Link to="/login" className="text-orange-500 hover:underline ml-1">
            Login
            </Link>
        </p>
    
        {error && (
            <p className="text-center text-red-600 bg-red-100 dark:bg-red-900 p-2 rounded-md mb-4">
            {error}
            </p>
        )}
    
        <form onSubmit={handleSubmit(create)} className="space-y-4">


            <Input
            label="Username"
            placeholder="Enter Your Username"
            type="text"
            {...register("username", {
                required: true,
            })}
            />

            <Input
            label="Email"
            placeholder="Enter Your Email"
            type="email"
            {...register("email", {
                required: true,
                validate: {
                    matchPattern: (value) =>
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/i.test(value) ||
                    "Enter a valid Email Address Format",
                },
            })}
            />
    
            <Input
            label="Password"
            placeholder="Enter Your Password"
            type="password"
            {...register("password", {
                required: true,
            })}
            />
    
            <Button type="submit" bgColor="bg-orange-500" textColor="text-blue">Sign Up</Button>
        </form>
        </div>
    </div>
    );
}

export default Signup