import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from './Service/Service';
import './Services.css'
const Services = () => {
    const [services, setServices]=useState([]);
    useEffect(()=>{
        fetch('painCareData.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    const service=[...services]
    service.length=6;
    return (
        <div className="container">
            <h2>Explore Our Services</h2>
           <div  className="services"> 
          <Container>
              <Row>
              {
                service.map(s=><Service
                key={s.id}
                service={s}
                ></Service>)
            }
              </Row>
          </Container>
           </div>
        </div>
    );
};

export default Services;