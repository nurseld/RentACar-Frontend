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
        <div className="order-complete-container container mb-5 mt-5 p-4">
            <h2 className="text-center mb-4">Order Complete</h2>

            <div className="transaction-information-card card mb-4">
                <div className="transaction-information-card-body card-body">
                    <h3 className="card-title">Transaction Information:</h3>
                    <p className="card-text">Total Price: {info.totalPrice}</p>
                    <p className="card-text">User ID: {info.userId}</p>
                    <p className="card-text">Car Plate: {info.car.plate}</p>
                    <img src={info.car.imagePath} />
                </div>
            </div>

            <div className="rental-details-card card mb-5">
                <div className="rental-details-card-body card-body">
                    <h3 className="card-title">Rental Details:</h3>
                    <p className="card-text">Pick-Up Location: {rental.pickUpLocation}</p>
                    <p className="card-text">Drop-Off Location: {rental.dropOffLocation}</p>
                    <p className="card-text">Start Date: {rental.startDate}</p>
                    <p className="card-text">End Date: {rental.endDate}</p>
                </div>
            </div>
        </div>
    );
}

export default OrderComplete;
