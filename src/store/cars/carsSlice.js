import { createSlice } from "@reduxjs/toolkit";
import carService from "../../services/carService";

const getCars = async () => {
    try {
        const responseData = carService.getAll()
            .then(response => { return response.data })
            .catch(error => { return [] });
        return responseData;
    } catch (error) {
        console.log("Error fetching cars:", error);
    }

    // try {
    //     const response = await axiosInstance.get("cars/getAll");
    //     return response.data;
    // } catch (error) {
    //     console.log("Error fetching cars:", error);
    // }
};

const carsSlice = createSlice(
    {
        name: "cars",
        initialState: {
            cars: await getCars(),
            filteredCars: await getCars(),
        },
        reducers: {
            // setCars: (state, action) => {
            //     return { ...state, cars: [...state.cars, action.payload] };
            // },
            setFilteredCars: (state, action) => {
                return { ...state, filteredCars: action.payload }
            }
        }
    }
)

export const carsReducer = carsSlice.reducer;
export const { setCars, setFilteredCars } = carsSlice.actions;