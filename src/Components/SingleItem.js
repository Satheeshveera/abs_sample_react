import React, { useEffect,useState } from "react";
import { FaEye,FaComments } from "react-icons/fa";
import Axios from "axios"
 

const SingleItem = (props)=>{
    let currentid = window.location.href.split(":")[3];
    const [nonvegValue,setnonvegValue] = useState([]);

    useEffect( async()=>{
        const responce = await Axios.get(`https://api.edamam.com/api/food-database/v2/parser?app_id=3b74bd0f&app_key=06bf8df046ee54cd5023703916acc14d&ingr=${currentid}&nutrition-type=cooking&health=alcohol-free`);
        setnonvegValue(responce.data.hints)
    },[])
  
    return (
      <div> 
        
               <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <div className="card mt-4">
                    <img className="card-img" src={nonvegValue.hints.food.image?nonvegValue.hints.food.image:"https://www.edamam.com/food-img/f43/f4311f520769d49bbe9b9519a30584a5.jpg"} alt="Bologna" />
                    <div className="card-img-overlay">
                    <a href="#" className="btn btn-light btn-sm">Cooking</a>
                    </div>
                    <div className="card-body">
                    <h4 className="card-title">{nonvegValue.hints.food.label}</h4>
                    <small className="text-muted cat">
                        <i className="far fa-clock text-info"></i> 30 minutes
                        <i className="fas fa-users text-info"></i> 4 portions
                    </small>
                    <p className="card-text">{nonvegValue.hints.food.category}</p>
                  
                    </div>
                    <div className="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
                    <div className="views">FEB 20, 12:45PM
                    </div>
                    <div className="stats">
                    <FaEye /> {(Math.random()*1000).toFixed(0)}
                    <FaComments className="ml-2"/> {(Math.random()*100).toFixed(0)}
                    </div>
                    
                    </div>
                </div>
                </div>
                </div>
                </div>
               
      </div>
    );
  } 
    
 

export default SingleItem;