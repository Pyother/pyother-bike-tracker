// * React:
import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';

// * Styles and UI:
import { constants } from '../../constants/Constants';
import stylesUtils from '../../assets/styles/Utils';
import stylesLayout from '../../assets/styles/Layout';
import { Button } from '@rneui/themed';

const StyledModal = ({ title, children, open, onClose }) => {

    return (
        <Modal
            visible={open}
            transparent={true}
            animationType="fade"
        >
            <View style={[stylesUtils.modalOverlay]}>
                <View style={[stylesUtils.modal]}>
                    <View style={[stylesUtils.center, stylesUtils.padding15Bottom]}>
                        <Text style={[stylesUtils.title]}>{title}</Text>
                    </View>
                    <View style={[stylesLayout.stackVertical]}>
                        {children}
                        <Button
                            onPress={() => onClose()}
                            color={constants.accentSecondary}
                        >
                            <Text>Close</Text>
                        </Button>
                    </View>
                </View>
            </View>
        </Modal>
    ) 
}

export default StyledModal;