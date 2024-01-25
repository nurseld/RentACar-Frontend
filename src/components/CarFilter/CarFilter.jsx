import React from 'react'
import "./car-filter.css";

function CarFilter() {


    return (

        <div className='car-filter'>
            <input type="checkbox" className="btn-check" id="btn-check-2-outlined" autocomplete="off" />
            <label className="btn btn-outline-secondary" for="btn-check-2-outlined">Checked</label><br />
        </div>

    )
}

export default CarFilter