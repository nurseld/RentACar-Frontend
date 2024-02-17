import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from "reactstrap";
import CarItem from "../CarItem/CarItem";
import { useDispatch, useSelector } from "react-redux";
import { Page } from '../../constants';
import { setFilteredCars } from '../../store/cars/carsSlice';

function CarList() {

    const [filteredCars, setFilteredCars] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedYears, setSelectedYears] = useState([]);

    const carItemsFromApi = [
        { brandName: "BMW", modelName: "bişey", colorName: "mavi", year: "1991", dailyPrice: "1 lira" },
        { brandName: "BMW", modelName: "bişey", colorName: "mavi", year: "1992", dailyPrice: "1 lira" },
        { brandName: "BMW", modelName: "bişey", colorName: "mavi", year: "1993", dailyPrice: "1 lira" },
        { brandName: "Nissan", modelName: "bişey", colorName: "mavi", year: "1991", dailyPrice: "1000000" },
        { brandName: "Nissan", modelName: "bişey", colorName: "mavi", year: "1991", dailyPrice: "1000000" },
        { brandName: "Nissan", modelName: "bişey", colorName: "mavi", year: "1992", dailyPrice: "1000000" },
        { brandName: "Nissan", modelName: "bişey", colorName: "mavi", year: "1993", dailyPrice: "1000000" },
        { brandName: "Toyota", modelName: "bişey", colorName: "siyah", year: "1991", dailyPrice: "50 Cent" },
        { brandName: "Toyota", modelName: "bişey", colorName: "siyah", year: "1992", dailyPrice: "50 Cent" },
        { brandName: "Toyota", modelName: "bişey", colorName: "siyah", year: "1993", dailyPrice: "50 Cent" },
        { brandName: "Mercedes", modelName: "bişey", colorName: "siyah", year: "1991", dailyPrice: "1 kuruş" },
        { brandName: "Mercedes", modelName: "bişey", colorName: "siyah", year: "1991", dailyPrice: "1 kuruş" },
        { brandName: "Mercedes", modelName: "bişey", colorName: "siyah", year: "1992", dailyPrice: "1 kuruş" },
        { brandName: "Mercedes", modelName: "bişey", colorName: "siyah", year: "1993", dailyPrice: "1 kuruş" },
        { brandName: "Mercedes", modelName: "bişey", colorName: "siyah", year: "1993", dailyPrice: "1 kuruş" },
    ];
    const filterCarItemsFromApi = [
        { brandName: "BMW" },
        { brandName: "Nissan" },
        { brandName: "Toyota" },
        { brandName: "Mercedes" },
    ];
    const filterYearItemsFromApi = [
        { year: "1991" },
        { year: "1993" },
        { year: "1991" },
        { year: "1991" },
    ];

    useEffect(() => {
        // Filter cars based on selected brands and years
        const filteredCars = carItemsFromApi.filter(car => {
            const brandSelected = selectedBrands.length === 0 || selectedBrands.includes(car.brandName);
            const yearSelected = selectedYears.length === 0 || selectedYears.includes(car.year);
            return brandSelected && yearSelected;
        });
        setFilteredCars(filteredCars);
    }, [selectedBrands, selectedYears]);

    const handleBrandClick = (brandName) => {
        setSelectedBrands(prevBrands => {
            if (prevBrands.includes(brandName)) {
                return prevBrands.filter(b => b !== brandName);
            } else {
                return [...prevBrands, brandName];
            }
        });
    };

    const handleYearClick = (year) => {
        setSelectedYears(prevYears => {
            if (prevYears.includes(year)) {
                return prevYears.filter(y => y !== year);
            } else {
                return [...prevYears, year];
            }
        });
    };

    return (
        <Container>
            <Row>
                <Col>
                    {
                        filterCarItemsFromApi.map((car, index) => (
                            <React.Fragment key={index}>
                                <button onClick={() => handleBrandClick(car.brandName)}>{car.brandName}</button>
                            </React.Fragment>
                        ))
                    }
                </Col>
                <Col>
                    {
                        filterYearItemsFromApi.map((year, index) => (
                            <React.Fragment key={index}>
                                <button onClick={() => handleYearClick(year.year)}>{year.year}</button>
                            </React.Fragment>
                        ))
                    }
                </Col>
                <Col lg="12">
                    <div className="d-flex align-items-center gap-3 mb-5">
                        <span className="d-flex align-items-center gap-2">
                            <i className="ri-sort-asc"></i> Sort By
                        </span>
                        <select>
                            <option>Select</option>
                            <option value="low">Low to High</option>
                            <option value="high">High to Low</option>
                        </select>
                    </div>
                </Col>
                {
                    filteredCars.map((car, index) => (
                        <CarItem
                            brandName={car.brandName}
                            modelName={car.modelName}
                            colorName={car.colorName}
                            year={car.year}
                            dailyPrice={car.dailyPrice}
                            key={index}
                            page={Page.CarListing_CarList}
                        />
                    ))
                }
            </Row>
        </Container>
    )
}

export default CarList
