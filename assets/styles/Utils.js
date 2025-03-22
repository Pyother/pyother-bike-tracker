import { StyleSheet } from 'react-native';
import { constants } from '../../constants/Constants';

const stylesUtils = StyleSheet.create({
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    spaceBetween: {
        justifyContent: 'space-between'
    },
    flex: {
        flex: 1
    },
    padding15: {
        padding: constants.padding
    },
    padding15Bottom: {
        paddingBottom: constants.padding
    },
    title: {
        fontSize: 18
    },
    subtitle: {
        fontSize: 14,
        color: constants.textSecondary,
        textTransform: 'capitalize',
        width: '100%'
    },
    button: {
        backgroundColor: constants.accentPrimary
    },
    iconButton: {
        width: 'fit-content',
        backgroundColor: constants.backgroundPrimary,
    },
    container: {
        padding: constants.padding,
        backgroundColor: constants.backgroundPrimary,
        borderRadius: constants.borderRadius,
    },
    accentSecondary: {
        color: constants.accentSecondary
    }
});

export default stylesUtils;
