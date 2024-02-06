import React from "react";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/CommonSection/CommonSection";
import CarList from "../../components/CarList/CarList";
import CarFilter from "../../components/CarFilter/CarFilter";
import "./car-listing.css"


const CarListing = () => {
  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />
      <section className="car-listing">

        <div className='car-filter'>
          <CarFilter name="BMW" id="1" />
          <CarFilter name="Nissan" id="2" />
          <CarFilter name="Mercedes Benz" id="3" />
          <CarFilter name="Fiat" id="4" />
          <CarFilter name="Renault" id="5" />
        </div>



        <CarList />
      </section>
    </Helmet>
  );
};

export default CarListing;
