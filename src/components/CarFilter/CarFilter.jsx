import React, { useEffect, useState } from 'react'
import "./car-filter.css";
import BrandFilter from './BrandFilter/BrandFilter';
import YearFilter from './YearFilter/YearFilter';

function CarFilter({ name, id, labelClassForColor = "secondary" }) {
    return (
        <>
            <BrandFilter name={name} id={id} labelClassForColor={labelClassForColor} />
            <YearFilter name={name} id={id} labelClassForColor={labelClassForColor} />
        </>
    )
}

export default CarFilter