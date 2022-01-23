import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from './ComponentsStyles';

function Header(props) {
    const { goBack, title, skip, skipPress } = props
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, }}>

            <TouchableOpacity onPress={goBack}
                style={Styles.headerContainer}>
                <Icon name="chevron-back-outline" size={40} color={'black'} />

                <Text style={Styles.headerText}>  {title}</Text>
            </TouchableOpacity>

            {skip && <TouchableOpacity onPress={skipPress}>
                <Text style={Styles.skipText}>
                    Skip
                </Text>
            </TouchableOpacity>}

        </View>
    );
}
export default Header;