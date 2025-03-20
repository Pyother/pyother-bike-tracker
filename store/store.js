import { configureStore } from '@reduxjs/toolkit';

// * UI reducers:
import ThemeReducer from '../features/uiFeatures/ThemeSlice';

// * Navigation reducers:
import ScreenReducer from '../features/navigationFeatures/ScreenSlice';

// * Data reducers:
import ActivityDataReducer from '../features/dataFeatures/ActivityDataSlice';
import LocationDataReducer from '../features/dataFeatures/LocationDataSlice';

const store = configureStore({
    reducer: {
        theme: ThemeReducer,
        screen: ScreenReducer,
        activityData: ActivityDataReducer,
        locationData: LocationDataReducer,
    }
});

export default store;