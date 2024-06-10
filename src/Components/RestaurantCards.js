import {CDN_URL} from "../Utils/constant";

const RestaurantCards= (props)=> {
    const { resData} = props;
    const {cloudinaryImageId, name, avgRating, cuisines=[], costForTwo } = resData?.info || {};
    const {deliveryTime} = resData?.info?.sla || {};

    

    return(
        <div className="m-4 p-4 w-[260px] pb-11 bg-slate-50 rounded-sm hover:bg-gray-200 ">
                <img className="rounded-lg py-4 content-evenly h-[100%]" alt="res-logo"
                src={CDN_URL + cloudinaryImageId}
                />
                <h3 className="font-bold text-lg font-serif ">{name}</h3>
                <h4 className="py-2 font-serif">{avgRating} stars</h4>
                <h5 className="py-2 font-serif">{deliveryTime} minutes</h5>
                <h5 className="py-2 font-serif">{costForTwo}</h5>
                <h5 className="py-2 font-serif">{cuisines.join(", ")}</h5>
        </div>
    );
};

// Higher Order Component
// Input- RestaurantCard => RestaurantCardPromoted

// export const withPromotedLabel = (RestaurantCards) => {
//     return ()=> {
//         return (
//             <div>
//                 <label>Promoted</label>
//                 <RestaurantCards />
//             </div>
//         );
//     };
// };

export default RestaurantCards;