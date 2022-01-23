import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Styles from './ComponentsStyles';

function Button(props) {
    const { onPress, title } = props
    return (
        <TouchableOpacity style={Styles.button} onPress={onPress}>
            <Text style={Styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}
export default Button;