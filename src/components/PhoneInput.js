import React from 'react';
import IntlPhoneInput from 'react-native-intl-phone-input';
import Styles from './ComponentsStyles';

function PhoneInput(props) {
    const { onChangeText } = props

    return (
        <IntlPhoneInput containerStyle={Styles.phoneInput}
            flagStyle={Styles.flagStyle}
            onChangeText={onChangeText}
            defaultCountry="TR"
        />
    );
}
export default PhoneInput;