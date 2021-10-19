import React from 'react';
import './Doctor.css'
import img1 from '../../image/doctors/200x200.jpg';
import img2 from '../../image/doctors/amy.jfif';
import img3 from '../../image/doctors/andrew.jfif';
import img4 from '../../image/doctors/christolias.png';
import img5 from '../../image/doctors/daniel.jfif';
import img6 from '../../image/doctors/dev.jfif';

const Doctor = () => {
    return (
        <div className="doctor-container">
            <div className="row doctor">
                <div className="img col-4">
                    <img src={img1} alt="" />
                </div>
                <div className="info col-8">
                    <h3>Dr. Stephen Roman, MD</h3>
                    <h4>Physical Medicine Rehabilitation, Pain Medicine
                    </h4>
                    <p>Location: Cedar Knolls, NJ 07927 (2 other locations)</p>
                    <button className="btn btn-success">call now</button>
                </div>
            </div>
            <div className="row doctor">
                <div className="img col-4">
                    <img src={img3} alt="" />
                </div>
                <div className="info col-8 mt-3">
                    <h3>Dr Andrew So, MD</h3>
                    <h4>Anesthesiologist, Sports Medicine
                    </h4>
                    <p>Location: Clifton, NJ 07013 (3 other locations)</p>
                    <button className="btn btn-success">call now</button>
                </div>
            </div>
            <div className="row doctor">
                <div className="img col-4">
                    <img src={img2} alt="" />
                </div>
                <div className="info col-8 mt-3">
                    <h3>Dr Andrew So, MD</h3>
                    <h4>Anesthesiologist, Sports Medicine

                    </h4>
                    <p>Location: Clifton, NJ 07013 (3 other locations)</p>
                    <button className="btn btn-success">call now</button>
                </div>
            </div>
            <div className="row doctor">
                <div className="img col-4">
                    <img src={img4} alt="" />
                </div>
                <div className="info col-8 mt-3">
                    <h3>Dr. Naum Shaparin, MD, MBA </h3>
                    <h4>
                        Director of Pain Services at Montefiore Medical Center, Department of Anesthesiology
                    </h4>
                    <p></p>
                    <button className="btn btn-success">call now</button>
                </div>
            </div>
            <div className="row doctor">
                <div className="img col-4">
                    <img src={img5} alt="" />
                </div>
                <div className="info col-8 mt-3">
                    <h3>Dr. Neel Mehta, M.D</h3>
                    <h4>
                        Medical Director of Pain Medicine at the Weill-Cornell Pain Medicine Center, and New York Presbyterian Hospital
                    </h4>
                    <p></p>
                    <button className="btn btn-success">call now</button>
                </div>
            </div>
            <div className="row doctor">
                <div className="img col-4">
                    <img src={img6} alt="" />
                    </div>
                <div className="info col-8 mt-3">
                    <h3>Dr. Nitin Sekhri, MD</h3>
                    <h4>
                        Medical Director, Pain Management: Department of Anesthesiology
                    </h4>
                    <p>Advanced Physician Services Westchester Medical Center </p>
                    <button className="btn btn-success">call now</button>
                </div>
            </div>
        </div>
    );
};

export default Doctor;