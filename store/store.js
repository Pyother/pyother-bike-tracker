import { configureStore } from '@reduxjs/toolkit';

// * UI reducers:
import ThemeReducer from '../features/uiFeatures/ThemeSlice';

const store = configureStore({
    reducer: {
        theme: ThemeReducer,
    }
});

export default store;