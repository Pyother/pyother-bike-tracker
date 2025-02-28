import { configureStore } from '@reduxjs/toolkit';

// * UI reducers:
import ThemeReducer from '../features/uiFeatures/ThemeSlice';

// * Navigation reducers:
import ScreenReducer from '../features/navigationFeatures/ScreenSlice';

const store = configureStore({
    reducer: {
        theme: ThemeReducer,
        screen: ScreenReducer,
    }
});

export default store;