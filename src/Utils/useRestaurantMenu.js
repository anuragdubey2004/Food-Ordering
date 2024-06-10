import { useState, useEffect } from "react";
import { MENU_URL } from "./constant";

const useRestaurantMenu = (resId) =>{
  
    const [resInfo, setResinfo]= useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu= async() =>{
         const data= await fetch(MENU_URL + resId);
         const json= await data.json();
         console.log(json);
         setResinfo(json.data);
    }; 
    return resInfo;
}
export default useRestaurantMenu;