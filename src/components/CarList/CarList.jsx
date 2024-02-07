import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from "reactstrap";
import CarItem from "../CarItem/CarItem";
import { useSelector } from "react-redux";

function CarList() {

    const initialCars = useSelector((state) => state.cars.cars);
    const [filteredCars, setFilteredCars] = useState([]);
    const [years, setYears] = useState([]);
    const [selectedYear, setSelectedYear] = useState("all");

    const filterByYear = () => {
        if (selectedYear === "all") {
            setFilteredCars(initialCars);
        } else {
            setFilteredCars(initialCars.filter((c) => c.year == selectedYear));
        }
    }

    const getUniqueYears = async () => {
        const updatedYears = initialCars.reduce((years, car) => {
            if (!years.includes(car.year)) {
                return [...years, car.year];
            }
        }, []);
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
                        <CarItem item={item} key={item.id} />
                    ))
                }
            </Row>
        </Container>

    )
}

export default CarList