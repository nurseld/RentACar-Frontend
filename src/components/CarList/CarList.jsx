import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from "reactstrap";
import CarItem from "../CarItem/CarItem";
import { useDispatch, useSelector } from "react-redux";
import { Page } from '../../constants';
import { setFilteredCars } from '../../store/cars/carsSlice';

function CarList() {
    const dispatch = useDispatch();

    const initialCars = useSelector((state) => state.cars.cars);
    const filteredCars = useSelector((state) => state.cars.filteredCars);
    const [years, setYears] = useState([]);
    const [selectedYear, setSelectedYear] = useState("all");

    const filterByYear = () => {
        if (selectedYear === "all") {
            dispatch(setFilteredCars(initialCars));
        } else {
            dispatch(setFilteredCars(initialCars.filter((c) => c.year == selectedYear)))
        }
    }

    // const getUniqueYears = async () => {
    //     const updatedYears = initialCars.reduce((years, car) => {
    //         if (!years.includes(car.year)) {
    //             return [...years, car.year];
    //         }
    //     }, []);
    //     setYears(updatedYears.sort((a, b) => b - a));
    // };

    const getUniqueYears = async () => {
        const yearsSet = new Set();
        initialCars.forEach(car => {
            yearsSet.add(car.year);
        });
        const updatedYears = Array.from(yearsSet);
        setYears(updatedYears.sort((a, b) => b - a));
    };

    useEffect(() => {
        getUniqueYears();
    }, []);

    useEffect(() => {
        filterByYear()
    }, [selectedYear]);

    return (

        <Container>
            <Row>
                <Col lg="12">
                    <div className=" d-flex align-items-center gap-3 mb-5">
                        <span className=" d-flex align-items-center gap-2">
                            <i className="ri-sort-asc"></i> Sort By
                        </span>

                        <select>
                            <option>Select</option>
                            <option value="low">Low to High</option>
                            <option value="high">High to Low</option>
                        </select>
                        <select onChange={(e) => setSelectedYear(e.target.value)}>
                            <option value="all">Year</option>
                            {
                                years.map((year, index) => (<option key={index} value={year}>{year}</option>))
                            }
                        </select>
                    </div>
                </Col>

                {
                    filteredCars.map((item) => (
                        <CarItem item={item} key={item.id} page={Page.CarListing_CarList} />
                    ))
                }
            </Row>
        </Container>

    )
}

export default CarList