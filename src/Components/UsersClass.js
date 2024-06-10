// It is class Based components
import React from "react";
class UsersClass extends React.Component{
   
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            // count2:1,
        };
        console.log(props);
        console.log("Child Constructor");
    }

    render(){
        const {idName} = this.props;
        const {count, count2} = this.state;
        console.log("child render");
        return(
            <div className="user-card">
                <h1>Count: {count}</h1>
                {/* <h1>Count: {count2}</h1> */}

            <button className="count-btn" onClick={()=>{
                this.setState({
                    count : this.state.count + 1
                })
            }}> Count Increase</button>
            

            <h2>Name:{idName}</h2>
            <h3>Location: Bhopal</h3>
            <h4>Contach: ugnfirenvirenv</h4>
         </div>
        );


        
    };
};
export default UsersClass; 