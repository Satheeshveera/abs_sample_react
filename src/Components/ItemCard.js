import React from "react";
import { FaEye,FaComments } from "react-icons/fa";
import {Link} from "react-router-dom";

const ItemCard = (props)=>{
    
        return(
           
                <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                <div className="card mt-4">
                    <img className="card-img" src={props.url} alt="Bologna" />
                    {/* <div className="card-img-overlay">
                    <a href="#" className="btn btn-light btn-sm">Cooking</a>
                    </div> */}
                    <div className="card-body">
                    <h4 className="card-title">{props.label}</h4>
                    <small className="text-muted cat">
                        <i className="far fa-clock text-info"></i> 30 minutes
                        <i className="fas fa-users text-info"></i> 4 portions
                    </small>
                    <p className="card-text">{props.category}</p>
                   <Link to={`/single:${props.id}`} >
                   <button className="btn btn-info"  >Read Recipe</button>
                   </Link>
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
            
        )
    
}

export default ItemCard;