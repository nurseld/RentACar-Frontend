import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from "reactstrap";
import CarItem from "../CarItem/CarItem";
import { Page } from '../../constants';
import carService from '../../services/carService';
import './car-list.css'
import { toast } from 'react-toastify';


function CarList() {

    const [initialCars, setInitialCars] = useState([])
    const [filteredCars, setFilteredCars] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedModels, setSelectedModels] = useState([]);
    const [selectedYears, setSelectedYears] = useState([]);

    const getCars = async () => {
        try {
            const response = await carService.getAll()
            setInitialCars(response.data);
            setFilteredCars(response.data);
        } catch (error) {
            console.log("Error fetching cars:", error);
        }
    };

    useEffect(() => {
        getCars();
    }, [])

    const cars = initialCars;
    const brandNames = [...new Set(cars.map(car => car.brandName))].sort((a, b) => a.length - b.length);
    const modelNames = [...new Set(cars.map(car => car.modelName))].sort((a, b) => a.length - b.length);
    const years = [...new Set(cars.map(car => car.year))];



    useEffect(() => {
        // Filter cars based on selected brands and years
        const filteredCars = cars.filter(car => {
            const brandSelected = selectedBrands.length === 0 || selectedBrands.includes(car.brandName);
            const yearSelected = selectedYears.length === 0 || selectedYears.includes(car.year);
            const modelSelected = selectedModels.length === 0 || selectedModels.includes(car.modelName);
            return brandSelected && yearSelected && modelSelected;

        });
        setFilteredCars(filteredCars);

    }, [selectedBrands, selectedYears, selectedModels]);



    const handleBrandClick = (brandName) => {
        setSelectedBrands(prevBrands => {
            if (prevBrands.includes(brandName)) {
                return prevBrands.filter(b => b !== brandName);
            } else {
                return [...prevBrands, brandName];
            }
        });
    };


    const handleModelClick = (modelName) => {
        setSelectedModels(prevModels => {
            if (prevModels.includes(modelName)) {
                return prevModels.filter(m => m !== modelName);
            } else {
                return [...prevModels, modelName];
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
        <div className="car-list-content">
            <div className="car-filters">
                <div className="filter-group brand-filter">
                    <h4>Brands</h4>
                    <div className="filter-button-group">
                        {
                            brandNames.map((brandName, index) => (
                                <div key={index}>
                                    <button onClick={() => handleBrandClick(brandName)}>{brandName}</button>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="filter-group year-filter">
                    <h4>Models</h4>
                    <div className="filter-button-group">
                        {
                            modelNames.map((modelName, index) => (
                                <div key={index}>
                                    <button onClick={() => handleModelClick(modelName)}>{modelName}</button>
                                </div>
                            ))
                        }
                    </div>

                </div>
                <div className="filter-group year-filter">
                    <h4>Years</h4>
                    <div className="filter-button-group">
                        {
                            years.map((year, index) => (
                                <div key={index}>
                                    <button onClick={() => handleYearClick(year)}>{year}</button>
                                </div>
                            ))
                        }
                    </div>

                </div>


            </div>
            <div className="filtered-car-list">
                {
                    filteredCars.map((car, index) => (
                        <CarItem
                            car={car}
                            // id={car.id}
                            // imagePath={car.imagePath}
                            // brandName={car.brandName}
                            // modelName={car.modelName}
                            // colorName={car.colorName}
                            // year={car.year}
                            // dailyPrice={car.dailyPrice}
                            key={index}
                            page={Page.CarListing_CarList}
                        />
                    ))
                }
            </div>

        </div >
    )
}

export default CarList
