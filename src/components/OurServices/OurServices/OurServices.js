import React, { useEffect, useState } from 'react';
import { Row, Container } from 'react-bootstrap';
import OurService from '../OurService/OurService';
import './OurServices.css'
const OurServices = () => {
    const [OurServices, setOurServices]=useState([]);

    useEffect(()=>{
        fetch('painCareData.json')
        .then(res=>res.json())
        .then(data=>setOurServices(data))
        .catch(error=>{
            console.log(error.massage)
        })
    },[])
    return (
        <div>
            <h2 className="explore-service">Explore Our all Services</h2>
           <div className="our-services">
               <Container>
                   <Row>
                   {
                OurServices.map(service=><OurService
                key={service.id}
                service={service}
                ></OurService>)
            }
                   </Row>
               </Container>
           </div>
        </div>
    );
};

export default OurServices;