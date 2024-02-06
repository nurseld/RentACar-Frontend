import React from 'react'
import "./overlay-loader.css";
import { useSelector } from 'react-redux';

const OverlayLoader = () => {

    const loadingState = useSelector((state) => state.loading);
    console.log(loadingState);

    return (
        <div className="overlay">
            <div className="overlay__inner">
                <div className="overlay__content">
                    <span className="spinner"></span>
                </div>
            </div>
        </div>
    )
}

export default OverlayLoader