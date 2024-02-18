import React from "react";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/CommonSection/CommonSection";
import CarList from "../../components/CarList/CarList";
import "./car-listing.css"


const CarListing = () => {
  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />
      <div className="car-listing">
        <CarList />
      </div>
    </Helmet>
  );
};

export default CarListing;
