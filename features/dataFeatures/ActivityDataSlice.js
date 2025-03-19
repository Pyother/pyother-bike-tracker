import { createSlice } from '@reduxjs/toolkit';

const ActivityDataSlice = createSlice({
    name: 'activityData',
    initialState: {
        activitiesArray: []
    },
    reducers: {
        addActivity: (state, action) => {
            state.activitiesArray.push(action.payload);
        }
    }
});

export const { addActivity } = ActivityDataSlice.actions;
export default ActivityDataSlice.reducer;