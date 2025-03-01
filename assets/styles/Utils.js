import { StyleSheet } from 'react-native';
import { constants } from '../../constants/Constants';

const stylesUtils = StyleSheet.create({
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    padding15: {
        padding: constants.padding
    },
    title: {
        fontSize: 'large'
    },
    subtitle: {
        fontSize: 'medium',
        fontWeight: 'bold'
    },
    iconButton: {
        width: 'fit-content',
        backgroundColor: constants.backgroundPrimary,
    },
});

export default stylesUtils;
