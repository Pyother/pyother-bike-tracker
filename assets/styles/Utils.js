import { StyleSheet } from 'react-native';
import { constants } from '../../constants/Constants';

const stylesUtils = StyleSheet.create({

    // * Flexbox:
    // Paddings, margins, and other space distributions:
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


    // * Standard components:
    // Buttons, modals, containers, chips, selects, etc.
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
    button: {
        backgroundColor: constants.accentPrimary,
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


    // * Text:
    // Titles, subtitles, and other text components:
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


    // * Colors:
    // Primary, secondary, and other color schemes:
    accentSecondary: {
        color: constants.accentSecondary
    }
});

export default stylesUtils;
