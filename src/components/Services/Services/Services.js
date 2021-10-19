import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices]=useState([]);

    useEffect(()=>{
        fetch('painCareData.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
        .catch(error=>{
            console.log(error.massage)
        })
    },[])
    return (
        <div>
            {
                services.map(service=><Service
                key={service.id}
                ></Service>)
            }
        </div>
    );
};

export default Services;