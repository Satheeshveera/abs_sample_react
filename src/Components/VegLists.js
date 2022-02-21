import React, { useEffect,useState } from "react";
import Axios from "axios";
import ItemCard from "./ItemCard";

 
const VegLists =(props)=>{
    const [vegValue,setvegValue] = useState([]);
    useEffect( async()=>{
         const responce = await Axios.get(props.vegUrl);
         setvegValue(responce.data.hints)
     },[])
     if(vegValue){
        var listItem =  vegValue.map((item)=>{
           
           return  <ItemCard key={item.food.foodId} url={item.food.image?item.food.image:"https://www.edamam.com/food-img/f43/f4311f520769d49bbe9b9519a30584a5.jpg"} id={item.food.foodId} categoryLabel={item.food.categoryLabel} category={item.food.category} label={item.food.label}/>
        })
        
     }

    return(
        <div className="mt-2">
            <h2>Vegetarian Foods</h2>
            <div className="container">
            <div className="row">
           {listItem}
           </div>
           </div>
        </div>
    )
}

export default VegLists;