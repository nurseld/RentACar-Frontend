import React, { useEffect, useState } from 'react'
import "./car-filter.css";
import axiosInstance from '../../core/utils/interceptors/axiosInterceptors';

function CarFilter({ name, id, labelClassForColor = "secondary" }) {

    const [carBrand, setCarBrand] = useState([])
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axiosInstance.get("brands/getAll");
            setCarBrand(response.data);
            console.log(response.data)
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
            {
                carBrand.map((brand) => (
                    <>
                        <input type="checkbox" className="btn-check" id={brand.id} />
                        <label for={brand.id} className={`btn btn-outline-${labelClassForColor} filter-btn-outline filter-btn-outline-hover`}>
                            {brand.name}
                        </label>
                    </>
                ))
            }
        </>
    )
}

export default CarFilter