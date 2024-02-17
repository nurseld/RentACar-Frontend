import { createSlice } from "@reduxjs/toolkit";


const filtersSlice = createSlice(
    {
        name: "filters",
        initialState: {
            selectedBrand: "all",
            selectedBrands: [],
            selectedYear: "all",
            selectedYears: [],
        },
        reducers: {
            setSelectedBrand: (state, action) => {
                return { ...state, selectedBrand: action.payload }
            },
            setSelectedBrands: (state, action) => {
                return { ...state, selectedBrands: action.payload }
            },
            setSelectedYear: (state, action) => {
                return { ...state, selectedYear: action.payload }
            },
            setSelectedYears: (state, action) => {
                return { ...state, selectedYears: action.payload }
            },
        }
    }
)

export const filtersReducer = filtersSlice.reducer;
export const { setSelectedBrand, setSelectedBrands, setSelectedYear, setSelectedYears } = filtersSlice.actions;