import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import Styles from './ComponentsStyles';

function Button(props) {
    const { onPress, title , customStyle, loader} = props
    return (
        <TouchableOpacity style={[Styles.button, customStyle]} onPress={onPress}>
            {!loader && <Text style={Styles.buttonText}>{title}</Text>}
            {loader && <ActivityIndicator color={'white'}/>}
        </TouchableOpacity>
    );
}
export default Button;