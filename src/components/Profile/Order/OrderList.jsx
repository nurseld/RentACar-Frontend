import React, { useState, useEffect } from 'react';
import './order-list.css';
import { useSelector } from 'react-redux';
import axiosInstance from '../../../core/utils/interceptors/axiosInterceptors';
import { toast } from 'react-toastify';

function OrderList() {
    const authState = useSelector((store) => store.auth);
    const [rentals, setRentals] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (authState.id !== 0) {
                    const response = await axiosInstance.get(`rentals/getByUserId/${authState.id}`);
                    setRentals(response.data);
                    console.log(response.data)
                } else {
                    toast.error("Üye girişi yapmalısınız!");
                }
            } catch (error) {
                console.error('Error fetching rentals:', error);
                toast.error("Kiralama bilgileri alınırken bir hata oluştu.");
            }
        };

        fetchData();
    }, [authState.id]);

    return (
        <div className='order-container'>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Kiralama No</th>
                        <th scope="col">Araç Modeli</th>
                        <th scope="col">Start Date</th>
                        <th scope="col">End Date</th>
                        <th scope="col">Invoice No</th>
                        <th scope="col">Total Price</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {rentals.map((rental, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{rental.modelName}</td>
                            <td>{rental.startDate}</td>
                            <td>{rental.endDate}</td>
                            <td>{rental.invoiceNo}</td>
                            <td>{rental.totalPrice}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default OrderList;