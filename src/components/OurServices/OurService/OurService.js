import React from 'react';
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const OurService = ({service}) => {
    const history=useHistory();
    const {name,image,id,description,doctor}=service;
    const goDetail=(serviceId)=>{
        history.push(`/detail/${serviceId}`);
    }
    return (

           <Col sm={12} md={6} lg={4}>
            <div className="service-container">
            <div>
                <img className="image" src={image} alt="" />
            </div>
           <div>
           <h3>{name}</h3>
           <h4>{doctor}</h4>
           <p>{description.slice(0,50)}</p>
           <button className="btn btn-success" onClick={()=>goDetail(id)}>Go detail</button>
           </div>
        </div>
        </Col>
    );
};

export default OurService;