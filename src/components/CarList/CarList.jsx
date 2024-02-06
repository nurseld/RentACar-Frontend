import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from "reactstrap";
import CarItem from "../CarItem/CarItem";
import axios from "axios";
import axiosInstance from '../../core/utils/interceptors/axiosInterceptors';

function CarList() {

    const [initialPosts, setInitialPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [selectedYear, setSelectedYear] = useState("all");
    const [years, setYears] = useState([]);

    const fetchPosts = async () => {
        try {
            const response = await axiosInstance.get("cars/getAll");
            if (selectedYear === "all") {
                setInitialPosts(response.data)
                setFilteredPosts(response.data);
            } else {
                setFilteredPosts(response.data.filter((c) => c.year == selectedYear));
            }
        } catch (error) {
            console.log("Error fetching posts:", error);
        }
    };

    const getUniqueYears = async () => {
        const updatedYears = initialPosts.reduce((years, car) => {
            if (!years.includes(car.year)) {
                return [...years, car.year];
            }
            return years.sort((a, b) => b - a);
        }, []);
        setYears(updatedYears);

    };

    useEffect(() => {

        fetchPosts();
    }, [selectedYear]);

    useEffect(() => {
        getUniqueYears();
    }, [initialPosts]);

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
                    filteredPosts.map((item) => (
                        <CarItem item={item} key={item.id} />
                    ))
                }
            </Row>
        </Container>

    )
}

export default CarList