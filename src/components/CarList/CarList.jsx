import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from "reactstrap";
import CarItem from "../CarItem/CarItem";
import { Page } from '../../constants';
import carService from '../../services/carService';


function CarList() {

    const [initialCars, setInitialCars] = useState([])
    const [filteredCars, setFilteredCars] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedYears, setSelectedYears] = useState([]);

    const getCars = async () => {
        try {
            const response = await carService.getAll()
            setInitialCars(response.data);
            setFilteredCars(response.data)
        } catch (error) {
            console.log("Error fetching cars:", error);
        }
    };

    useEffect(() => {
        getCars();
    }, [])

    const cars = initialCars;
    const brandNames = [...new Set(cars.map(car => car.brandName))];
    const years = [...new Set(cars.map(car => car.year))];


    useEffect(() => {
        // Filter cars based on selected brands and years
        const filteredCars = cars.filter(car => {
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
                        brandNames.map((brandName, index) => (
                            <React.Fragment key={index}>
                                <button onClick={() => handleBrandClick(brandName)}>{brandName}</button>
                            </React.Fragment>
                        ))
                    }
                </Col>
                <Col>
                    {
                        years.map((year, index) => (
                            <React.Fragment key={index}>
                                <button onClick={() => handleYearClick(year)}>{year}</button>
                            </React.Fragment>
                        ))
                    }
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
