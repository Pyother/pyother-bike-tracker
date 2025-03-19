import { createSlice } from '@reduxjs/toolkit';

const LocationDataSlice = createSlice({
    name: 'locationData',
    initialState: {
        current: null
    },
    reducers: {
        updateLocation: (state, action) => {
            state.current = action.payload;
        }
    }
});

export const { updateLocation } = LocationDataSlice.actions;
export default LocationDataSlice.reducer;
