import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from "reactstrap";
import CarItem from '../../components/CarItem/CarItem';
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import Helmet from '../../components/Helmet/Helmet';
import CommonSection from '../../components/CommonSection/CommonSection';
import { Page } from '../../constants';

function RentableCars() {


    const location = useLocation();
    const { cars } = location.state || [];
    const [carList, setCarList] = useState(cars);

    const [filteredCars, setFilteredCars] = useState([]);
    const [years, setYears] = useState([]);
    const [selectedYear, setSelectedYear] = useState("all");

    const filterByYear = () => {
        if (selectedYear === "all") {
            setFilteredCars(carList);
        } else {
            setFilteredCars(carList.filter((c) => c.year == selectedYear));
        }
    }

    // const getUniqueYears = async () => {
    //     const updatedYears = carList.reduce((years, car) => {
    //         if (!years.includes(car.year)) {
    //             return [...years, car.year];
    //         }
    //     }, []);
    //     setYears(updatedYears.sort((a, b) => b - a));
    // };

    const getUniqueYears = async () => {
        const yearsSet = new Set();
        carList.forEach(car => {
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

        <Helmet>
            <CommonSection title="Rentable Cars" />
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
                            <CarItem item={item} key={item.id} page={Page.RentableCars} />
                        ))
                    }
                </Row>
            </Container>

        </Helmet>

    )
}

export default RentableCars