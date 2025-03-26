import { configureStore } from '@reduxjs/toolkit';

// * UI reducers:
import ThemeReducer from '../features/uiFeatures/ThemeSlice';

// * Data reducers:
import ActivityDataReducer from '../features/dataFeatures/ActivityDataSlice';
import LocationDataReducer from '../features/dataFeatures/LocationDataSlice';

const store = configureStore({
    reducer: {
        theme: ThemeReducer,
        activityData: ActivityDataReducer,
        locationData: LocationDataReducer,
    }
});

export default store;