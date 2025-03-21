// * Expo modules:
import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';

// * Storage:
import storeData from '../services/asyncStorage/storeData';

const LOCATION_TASK_NAME = 'background-location-task';

const requestPermissions = async () => {
    
    const { status: foregroundStatus } = await Location.requestForegroundPermissionsAsync();
    if (foregroundStatus !== 'granted') {
        return false;
    }

    const { status: backgroundStatus } = await Location.requestBackgroundPermissionsAsync();
    if (backgroundStatus !== 'granted') {
        return false;
    }

    return true;
};

TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
    if (error) {
        console.error(error);
        return;
    }
    if (data) {
        const { locations } = data;
        console.log('locations', locations);
        const lastPosition = locations[locations.length - 1];
        storeData('currentAltitude', lastPosition.coords.altitude);
        storeData('currentLatitude', lastPosition.coords.latitude);
        storeData('currentLongitude', lastPosition.coords.longitude);
    }
});

export const startBackgroundLocation = async () => {
    const hasPermission = await requestPermissions();
    if (!hasPermission) return;

    const isRunning = await Location.hasStartedLocationUpdatesAsync(LOCATION_TASK_NAME);
    if (isRunning) {
        return;
    }

    await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        accuracy: Location.Accuracy.Balanced,
        timeInterval: 10, // seconds
        distanceInterval: 5, // metres
        showsBackgroundLocationIndicator: true, // icon for iOS 
        foregroundService: {
            notificationTitle: 'Śledzenie lokalizacji',
            notificationBody: 'Aplikacja śledzi lokalizację w tle',
            notificationColor: '#FF0000',
        },
    });
};

export { LOCATION_TASK_NAME };



