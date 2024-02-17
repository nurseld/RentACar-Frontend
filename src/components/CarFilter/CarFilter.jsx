import React, { useEffect, useState } from 'react'
import "./car-filter.css";
import BrandFilter from './BrandFilter/BrandFilter';

function CarFilter({ name, id, labelClassForColor = "secondary" }) {



    return (
        <BrandFilter name={name} id={id} labelClassForColor={labelClassForColor} />
    )
}

export default CarFilter