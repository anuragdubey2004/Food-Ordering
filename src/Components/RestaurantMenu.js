import useRestaurantMenu from "../Utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../Utils/constant";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = ()=>{

 const {resId} = useParams();
 const resInfo = useRestaurantMenu(resId);
 
 const [showIndex, setShowIndex] = useState(null); 

 const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info || {};

 if(resInfo === null) return <Shimmer/>; 

  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
//   console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
   (c)=>
      c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
 
//   console.log(itemCards);
    return(
        <div className="text-center">
           <h1 className="font-bold text-2xl my-6" >{name}</h1>
           <p className="font-bold text-lg">{ cuisines.join(", ")}- {costForTwoMessage}</p>
           {categories.map((categories, index)=>(

            // Now this is controlled component
            <RestaurantCategory key ={categories?.card?.card?.title} data={categories?.card?.card}
             showItems= {index === showIndex ? true : false}  // lifting the state up 
             setShowIndex={()=> setShowIndex(index)}  // for changing in parents state
            />
           ))}
        </div>
   );
};


export default RestaurantMenu;