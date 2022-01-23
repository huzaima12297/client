import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../components/ComponentsStyles'

function UserDate(props) {
    const { onPress, dateDisplay, customStyle } = props
    return (
        <TouchableOpacity onPress={onPress}
            style={[Styles.inputContainer, customStyle]}
        >
            <Text style={Styles.icon}>{dateDisplay}</Text>
            <Icon name={"calendar-outline"} color="grey" size={25} style={Styles.selfCenter} />
        </TouchableOpacity>
    );
}

export default UserDate;