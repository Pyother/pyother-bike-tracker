import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
    try {
        value = JSON.stringify(value);
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.log('Error storing data:', error);
    }
}

export default storeData;