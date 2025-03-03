import { StyleSheet } from 'react-native';
import { constants } from '../../constants/Constants';

const stylesLayout = StyleSheet.create({
    screenContainer: {
        backgroundColor: 'inerit',
        padding: 15,
        flex: 1,
    },
    stackHorizontal: {
        flexDirection: 'row',
        gap: constants.padding,
    },
    stackVertical: {
        flexDirection: 'column',
        gap: constants.padding,
    },
});

export default stylesLayout;