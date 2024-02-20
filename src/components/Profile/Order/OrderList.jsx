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
    console.log(rentals)
    return (
        <div className='order-container'>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th className='text-center' scope="col">Kiralama No</th>
                        <th className='text-center' scope="col"></th>
                        <th className='text-center' scope="col">Plaka</th>
                        <th className='text-center' scope="col">Araç Modeli</th>
                        <th className='text-center' scope="col">Start Date</th>
                        <th className='text-center' scope="col">End Date</th>
                        <th className='text-center' scope="col">Invoice No</th>
                        <th className='text-end' scope="col">Total Price</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {rentals.map((rental, index) => (
                        <tr key={index}>
                            <th className='align-middle text-center' scope="row">{index + 1}</th>
                            <td>
                                <img src={rental.imagePath} style={{ width: '160px' }} />
                            </td>
                            <td className='align-middle text-center' scope="row">{rental.plate}</td>
                            <td className='align-middle text-center'>{rental.brandName} {rental.modelName}</td>
                            <td className='align-middle text-center'>{rental.startDate}</td>
                            <td className='align-middle text-center'>{rental.endDate}</td>
                            <td className='align-middle text-center' style={{ width: '200px' }}>{rental.invoiceNo}</td>
                            <th className='align-middle text-end h5 fw-bold'>{rental.totalPrice} ₺</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default OrderList;