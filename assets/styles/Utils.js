import { StyleSheet } from 'react-native';
import { constants } from '../../constants/Constants';

const stylesUtils = StyleSheet.create({
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        backgroundColor: constants.backgroundPrimary,
        padding: constants.padding,
        borderRadius: constants.borderRadius,
        width: '80%',
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
    textSecondary: {
        color: constants.textSecondary
    },
    button: {
        backgroundColor: constants.accentPrimary,
        color: constants.textSecondary,
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
