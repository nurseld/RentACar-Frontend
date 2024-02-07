import React, { useEffect, useState } from 'react'
import "./car-filter.css";
import axiosInstance from '../../core/utils/interceptors/axiosInterceptors';

function CarFilter({ name, id, labelClassForColor = "secondary" }) {

    const [carData, setCarData] = useState([]);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axiosInstance.get("brands/getAll");
            setCarData(response.data);
        } catch (error) {
            console.error("Veri çekme hatası:", error);
            setError("Veri çekme hatası");
        }
    };

    useEffect(() => {

        fetchData();
    }, []);

    return (

        <>
            <input type="checkbox" className="btn-check" id={id} />
            <label
                className={`btn btn-outline-${labelClassForColor}`}
            >{name}
            </label>
        </>
    )
}

export default CarFilter