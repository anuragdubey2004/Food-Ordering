import { useState } from "react";

const Users = (props) =>{
    const [count]= useState(0);
    const [count2]= useState(1);
    return(
        <div className="user-card">
            <h1>Count: {count}</h1>
            <h1>Count: {count2}</h1>
           <h2>Name: {props.idName}</h2>
           <h3>Location: Bhopal</h3>
           <h4>Contach: ugnfirenvirenv</h4>
        </div>

    );
};
export default Users; 