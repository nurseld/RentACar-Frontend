import React, { useEffect, useState } from 'react'
import './year-filter.css'
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from '../../../core/utils/interceptors/axiosInterceptors';
import { setFilteredCars } from '../../../store/cars/carsSlice';


function YearFilter({ name, id, labelClassForColor = "secondary" }) {

    const dispatch = useDispatch();

    const initialCars = useSelector((state) => state.cars.cars);
    const filteredCars = useSelector((state) => state.cars.filteredCars);

    const [years, setYears] = useState([]);
    const [selectedYear, setSelectedYear] = useState("all");
    const [selectedYears, setSelectedYears] = useState([]);


    const checkSelectedYears = () => {
        if (selectedYears.includes(selectedYear)) {
            setSelectedYears([...selectedYears.filter((y) => y !== selectedYear)]);
        }
        else {
            setSelectedYears([...selectedYears, selectedYear]);
        }
    }

    const filterByYears = () => {
        if (selectedYears.includes("all") && selectedYears.length === 1) {
            dispatch(setFilteredCars(initialCars))
        }
        else {
            dispatch(setFilteredCars(initialCars.filter((c) => selectedYears.includes(c.year))))
        }
        setSelectedYear("all")
    }

    const getUniqueYears = async () => {
        const yearsSet = new Set();
        filteredCars.forEach(car => {
            yearsSet.add(car.year);
        });
        const updatedYears = Array.from(yearsSet);
        setYears(updatedYears.sort((a, b) => b - a));
    };

    useEffect(() => {
        getUniqueYears();
    }, []);

    useEffect(() => {
        checkSelectedYears()
    }, [selectedYear]);

    useEffect(() => {
        filterByYears()
    }, [selectedYears])

    // useEffect(() => {
    //     getUniqueYears()
    // }, [filteredCars])

    return (
        <>
            <h5>Years</h5>
            {
                years.map((year) => (
                    <>
                        <input type="checkbox" className="btn-check" id={year} />
                        <label
                            onClick={(e) => {
                                setSelectedYear(year)
                            }}
                            for={year}
                            className={`btn btn-outline-${labelClassForColor} filter-btn-outline filter-btn-outline-hover`}>
                            {year}
                        </label>
                    </>
                ))
            }
        </>
    )
}

export default YearFilter