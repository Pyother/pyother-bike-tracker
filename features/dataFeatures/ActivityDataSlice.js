import { createSlice } from '@reduxjs/toolkit';

const ActivityDataSlice = createSlice({
    name: 'activityData',
    initialState: {
        activitiesArray: [
            {
                id: 1,
                date: '2021-08-01',
                distance: 10,
                active: false,
                locations: []
            },
            {
                id: 2,
                date: '2021-08-02',
                distance: 20,
                active: false,
                locations: []
            },
            {
                id: 3,
                date: '2021-08-03',
                distance: 30,
                active: false,
                locations: []
            }
        ]
    },
    reducers: {
        addActivity: (state, action) => {
            if(
                action.payload.hasOwnProperty('date') && 
                action.payload.hasOwnProperty('id')
            ) {
                state.activitiesArray.push(action.payload);
            }
        }, 
        updateDistance: (state, action) => {
            const { id, distanceToAdd, newLocations } = action.payload;
            const activity = state.activitiesArray.find(activity => activity.id === id);
            if(activity) {
                activity.distance += distanceToAdd;
                activity.locations.push(newLocations);
            }
        },
        stopActivity: (state, action) => {
            const { id } = action.payload;
            const activity = state.activitiesArray.find(activity => activity.id === id);
            if(activity) {
                activity.active = false;
            }
        }
    }
});

export const { addActivity, updateDistance, stopActivity } = ActivityDataSlice.actions;
export default ActivityDataSlice.reducer;