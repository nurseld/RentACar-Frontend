import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './order-complete.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Helmet from '../../components/Helmet/Helmet';
import CommonSection from '../../components/CommonSection/CommonSection';


function OrderComplete() {
    const location = useLocation();
    const { info, rental } = location.state;

    useEffect(() => {
        console.log('Info:', info);
        console.log('Rental:', rental);
    }, []);

    return (
        <Helmet>
            <CommonSection />
            <h4 className="text-center mb-4">Your order has been completed successfully!</h4>
            <div className="order-complete-container container">
                {/* <h3 className="text-center mb-4">Your order has been completed successfully...</h3> */}
                <div className="order-information-card">
                    <div className="car-details-card">
                        <div className="car-details-card-body">
                            <h3 className="card-title text-center">Car Details</h3>
                            <div className="car-details-card-row">
                                <span className="car-details-card-description">Car Plate</span>
                                <span className="car-details-card-value">{info.car.plate}</span>
                            </div>
                            <div className="car-details-card-row">
                                <span className="car-details-card-description">Brand</span>
                                <span className="car-details-card-value">{info.car.brandName}</span>
                            </div>
                            <div className="car-details-card-row">
                                <span className="car-details-card-description">Model</span>
                                <span className="car-details-card-value">{info.car.modelName}</span>
                            </div>
                            <div className="car-details-card-row">
                                <span className="car-details-card-description">Year</span>
                                <span className="car-details-card-value">{info.car.year}</span>
                            </div>
                            <div className="car-details-card-row">
                                <span className="car-details-card-description">Daily Price</span>
                                <span className="car-details-card-value">{info.car.dailyPrice}</span>
                            </div>

                        </div>
                    </div>
                    <div className="car-image-card">
                        <img className='car-image' src={info.car.imagePath} />
                    </div>
                    <div className="rental-details-card">
                        <div className="rental-details-card-body">
                            <h3 className="card-title text-center">Rental Details</h3>
                            {/* <div className="rental-details-card-row">
                                <span className="rental-details-card-description">User ID:</span>
                                <span className="rental-details-card-value">{info.userId.name}</span>
                            </div> */}
                            {/* <div className="rental-details-card-row">
                                <span className="rental-details-card-description">Pick-Up Location</span>
                                <span className="rental-details-card-value">{rental.pickUpLocation}</span>
                            </div>
                            <div className="rental-details-card-row">
                                <span className="rental-details-card-description">Drop-Off Location</span>
                                <span className="rental-details-card-value">{rental.dropOffLocation}</span>
                            </div> */}
                            <div className="rental-details-card-row">
                                <span className="rental-details-card-description">Start Date</span>
                                <span className="rental-details-card-value">{rental.startDate}</span>
                            </div>
                            <div className="rental-details-card-row">
                                <span className="rental-details-card-description">End Date</span>
                                <span className="rental-details-card-value">{rental.endDate}</span>
                            </div>
                            <div className="rental-details-card-row">
                                <span className="rental-details-card-description">Total Price</span>
                                <span className="rental-details-card-value">{info.totalPrice}</span>
                            </div>
                            <div className="rental-details-card-row">
                                <span className="rental-details-card-description">Invoice No</span>
                                <span className="rental-details-card-value">{info.invoiceNo.substring(0, 20)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div></Helmet>

    );
}

export default OrderComplete;
