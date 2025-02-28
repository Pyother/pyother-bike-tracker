import { createSlice } from '@reduxjs/toolkit';

const ScreenSlice = createSlice({
    name: 'screen',
    initialState: {
        screen: 'home'
    },
    reducers: {
        setScreen: (state, action) => {
            state.screen = action.payload
        }
    }
});

export const { setScreen } = ScreenSlice.actions;
export default ScreenSlice.reducer;