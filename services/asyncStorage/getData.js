import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return value;
        }
    } catch (error) {
        return null;
    }
}

export default getData;