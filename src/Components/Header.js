import { LOGO_URL } from "../Utils/constant";
import {useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header=()=> {

    const [btnName, setbtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    // Selector : subscribing the store using selector

    const cartItems = useSelector((store)=> store.cart.items);
    
    return(
        <div className="flex items-center justify-between bg-red-600 h-50  ">
        <div className= "logo-container">
            <img className="w-56 py-1 " src={LOGO_URL}/>
        </div>
        <div className="text-white text-6xl font-bold font-serif">
            <h2 ><b>Food Order</b></h2>
            
        </div>
        <div className="flex items-center">
            <ul className="flex ">
                <li className="px-4 text-xl font-serif text-white ">Online Status:{onlineStatus ? "✅" : "❌" }</li>
                <li className="px-4 text-xl font-serif text-white " > <Link to="/">Home</Link> </li>
                <li className="px-4 text-xl font-serif text-white "> <Link to= "/About">About Us</Link> </li>
                <li className="px-4 text-xl font-serif text-white "> <Link to= "/Contact">Contact Us</Link> </li>
                <li className="px-4 text-xl font-serif text-white ">Cart ({cartItems.length} items)</li>
                <button className="px-4 bg-yellow-500 text-2xl text-black font-semibold font-serif"
                    onClick={()=>{
                      btnName=== "Login" ? setbtnName("Logout")
                      : setbtnName("Login");
                    }}
                >{btnName}</button>
            </ul>
        </div>
    </div>
    );
};

export default Header;