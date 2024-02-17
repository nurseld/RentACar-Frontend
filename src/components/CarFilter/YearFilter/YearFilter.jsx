import React, { useEffect, useState } from 'react'
import './year-filter.css'
import { useDispatch, useSelector } from "react-redux";
import { setFilteredCars } from '../../../store/cars/carsSlice';
import { setSelectedYear, setSelectedYears } from '../../../store/filter/filterSlice';


function YearFilter({ name, id, labelClassForColor = "secondary" }) {

    const dispatch = useDispatch();

    const initialCars = useSelector((state) => state.cars.cars);
    const filteredCars = useSelector((state) => state.cars.filteredCars);

    const [years, setYears] = useState([]);

    const selectedYear = useSelector((state) => state.filters.selectedYear);
    const selectedYears = useSelector((state) => state.filters.selectedYears);

    const checkSelectedYears = () => {
        if (selectedYears.includes(selectedYear)) {
            dispatch(setSelectedYears([...selectedYears.filter((y) => y !== selectedYear)]))
        }
        else {
            dispatch(setSelectedYears([...selectedYears, selectedYear]))
        }
    }

    const filterByYears = () => {
        if (selectedYears.includes("all") && selectedYears.length === 1) {
            dispatch(setFilteredCars(initialCars))
        }
        else {
            dispatch(setFilteredCars(initialCars.filter((c) => selectedYears.includes(c.year))))
        }
        dispatch(setSelectedYear("all"))
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
                                dispatch(setSelectedYear(year))
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