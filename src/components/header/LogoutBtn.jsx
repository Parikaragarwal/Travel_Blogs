//import react from "react"
import { useDispatch } from "react-redux";
import authservice from "../../Appwrite/auth";
import { logout } from "../../../store/authSlice";

function LogoutBtn()
{
    const dispatch=useDispatch();
    const logoutHandler=()=>{
        authservice.logout()
        .then(()=>{
            dispatch(logout());
        })
        
    }
    return(
        <button  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-xl shadow-md transition duration-300 ease-in-out border-2 border-blue-500 hover:border-blue-700"
        onClick={logoutHandler}>
        Logout
        </button>
    );
}

export default LogoutBtn