import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Styles from './ComponentsStyles';

function Button(props) {
    const { onPress, title , customStyle} = props
    return (
        <TouchableOpacity style={[Styles.button, customStyle]} onPress={onPress}>
            <Text style={Styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}
export default Button;