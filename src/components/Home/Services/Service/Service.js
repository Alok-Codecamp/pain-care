import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'


const Service = ({service}) => {
    const {name,doctor,id,image,description}=service;
    return (
        <Col sm={12} md={6} lg={4}>
            <div className="service-container">
            <div>
                <img className="image" src={image} alt="" />
            </div>
           <div>
           <h3>{name}</h3>
           <h4>{doctor}</h4>
           <p>{description.slice(0,50)} <Link to="/services">Read more...</Link></p>

           </div>

        </div>
        </Col>
    );
};

export default Service;