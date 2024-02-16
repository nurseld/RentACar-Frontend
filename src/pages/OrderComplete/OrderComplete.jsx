import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './order-complete.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function OrderComplete() {
    const location = useLocation();
    const { info, rental } = location.state;

    useEffect(() => {
        console.log('Info:', info);
        console.log('Rental:', rental);
    }, []);

    return (
        <div className="order-complete-container container">
            <h2 className="text-center mb-4">Order Complete</h2>
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
                            <span className="rental-details-card-value">{info.userId}</span>
                        </div> */}
                        <div className="rental-details-card-row">
                            <span className="rental-details-card-description">Pick-Up Location</span>
                            <span className="rental-details-card-value">{rental.pickUpLocation}</span>
                        </div>
                        <div className="rental-details-card-row">
                            <span className="rental-details-card-description">Drop-Off Location</span>
                            <span className="rental-details-card-value">{rental.dropOffLocation}</span>
                        </div>
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
                            <span className="rental-details-card-value">{info.invoiceNo}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderComplete;
