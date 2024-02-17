import React, { useEffect, useState } from 'react'
import "./car-filter.css";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from '../../core/utils/interceptors/axiosInterceptors';
import { setFilteredCars } from '../../store/cars/carsSlice';

function CarFilter({ name, id, labelClassForColor = "secondary" }) {

    const dispatch = useDispatch();


    const initialCars = useSelector((state) => state.cars.cars);

    const [error, setError] = useState(null);

    const [brands, setBrands] = useState([])
    const [selectedBrand, setSelectedBrand] = useState("all")
    const [selectedBrands, setSelectedBrands] = useState([])

    const checkSelectedBrands = () => {
        if (selectedBrands.includes(selectedBrand)) {
            setSelectedBrands([...selectedBrands.filter((b) => b !== selectedBrand)]);
        }
        else {
            setSelectedBrands([...selectedBrands, selectedBrand]);
        }
    }

    const filterByBrands = () => {
        if (selectedBrands.includes("all") && selectedBrands.length === 1) {
            dispatch(setFilteredCars(initialCars))
        }
        else {
            dispatch(setFilteredCars(initialCars.filter((c) => selectedBrands.includes(c.brandName))))
        }
        setSelectedBrand("all")
    }

    const getUniqueBrands = async () => {
        const brandsSet = new Set();
        initialCars.forEach(car => {
            brandsSet.add(car.brandName);
        });
        const updatedBrands = Array.from(brandsSet);
        setBrands(updatedBrands.sort((a, b) => b - a));
    };

    useEffect(() => {
        fetchData();
        getUniqueBrands();
    }, []);

    useEffect(() => {
        checkSelectedBrands()
    }, [selectedBrand]);

    useEffect(() => {
        filterByBrands()
    }, [selectedBrands])


    const fetchData = async () => {
        try {
            const response = await axiosInstance.get("brands/getAll");
            setBrands(response.data);
        } catch (error) {
            console.error("Veri çekme hatası:", error);
            setError("Veri çekme hatası");
        }
    };

    return (
        <>
            {
                brands.map((brand) => (
                    <>
                        <input type="checkbox" className="btn-check" id={brand.id} />
                        <label
                            onClick={(e) => {
                                setSelectedBrand(e.target.textContent)
                            }}
                            for={brand.id}
                            className={`btn btn-outline-${labelClassForColor} filter-btn-outline filter-btn-outline-hover`}>
                            {brand.name}
                        </label>
                    </>
                ))
            }
        </>
    )
}

export default CarFilter