import React from "react";
import { Row,Col } from 'react-bootstrap';
 
class Welcome extends React.Component{

    render(){
        return(  
            <Row className="w-100 mt-5 " >
              <Col xs={12} md={12}>
                <div>
                  <h1>Welcome to Foodie!</h1>
                  <p>“IT IS HEALTH THAT IS REAL WEALTH AND NOT PIECES OF GOLD AND SILVER.”</p>
                  
                </div>
              </Col>
            </Row>
         )
    }
}

export default Welcome;