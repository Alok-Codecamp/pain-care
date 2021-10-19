import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import notFoundImg from '../../image/404/404.jpg'
import './NotFound.css'
const NotFound = () => {
    const history=useHistory();
    const handleBackToHome=()=>{
            history.push('/home')
    }
    return (
        <div>
            <img src={notFoundImg} alt="" />
            <Button
            onClick={handleBackToHome}
            className="back-to-home" variant="warning">Back to home</Button>
        </div>
    );
};

export default NotFound;