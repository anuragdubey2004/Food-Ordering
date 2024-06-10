// import RestaurantCards, {withPromotedLabel} from "./RestaurantCards";   ---> for higher order component 
// import resList from "../Utils/mockData";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import RestaurantCards from "./RestaurantCards";

const Body= ()=> {

   const [listOfRestaurant, setListOfRestaurant] = useState([]);
   const [filteredRestaurant, setFilteredRestaurant] = useState([]);
   
   const [searchText, setsearchText]= useState("");

    

    console.log(listOfRestaurant);
 
    useEffect(()=>{
      fetchData();
    },[]);

    const fetchData= async ()=>{
      const data= await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json);
      
      // optional chaining "?"
      setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();
        if(onlineStatus === false) return <h1>Please Check Your Internet Connection !!!! </h1>;
        
     
    
  // Conditional Rendering
  //  if(listOfRestaurant.length === 0){
  //   return <Shimmer/>;
  //  }
  
    return listOfRestaurant.length === 0?(
      <Shimmer/>
    ): (
        <div className="body">
  
        <div className="flex justify-between py-2 m-2">
        <div className="">

            <input type="text" className="bg-yellow-400 px-4 m-4 w-96 h-10 rounded-lg" value= {searchText} 
            onChange={(e)=>{
              setsearchText(e.target.value);
            }} ></input>

            <button className="px-3 m-3 bg-gray-300 text-lg font-serif h-10 rounded-lg hover:bg-black hover:text-white"
            onClick={()=>{
              // Filter the restaurant card and update UI
              // search text
               console.log(searchText);
               const filteredRestaurant = listOfRestaurant.filter((res) =>
               res.info.name.toLowerCase().includes(searchText.toLowerCase())
           );
               setFilteredRestaurant(filteredRestaurant);
              
            }}
            >
              Search</button>
        </div>
            
         <button className="bg-slate-100 text-red-600 h-10 px-5 w-40 font-bold rounded-lg hover:bg-black"
            onClick={() => {
                const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4.4);
                setFilteredRestaurant(filteredList);
            }}>  Top Restaurant</button>
            </div>
             
       
        <div className="flex flex-wrap">
 
        {filteredRestaurant.map((restaurant) => (
          <Link
             key={restaurant.info.id}
             to={"/restaurant/" + restaurant.info.id}
           > 
         
          <RestaurantCards resData={restaurant} />
          </Link> 
          
   ))}
          

        </div>

    </div>
    );
};

export default Body;