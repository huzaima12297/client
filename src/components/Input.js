import React from 'react';
import { TextInput, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from './ComponentsStyles'

function Input(props) {
    const { placeholder,
        customStyles,
        customInputStyle,
        setShowPassword,
        showPassword,
        showIcon,
        secureTextEntry,
        numberOfLines,
        value,
        icon,
        autoFocus,
        inputRef,
        returnKeyType,
        onChange,
        ...rest } = props

    return (
        <View style={[Styles.inputContainer, customStyles]}>
            <TextInput
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                style={customInputStyle}
                value={value}
                autoFocus={autoFocus}
                numberOfLines={numberOfLines}
                onChangeText={onChange}
                ref={inputRef}
                returnKeyType={returnKeyType}
                {...rest}
            />

            {icon && <Icon name={"search"} color="grey" size={25} />}


            {showIcon && <TouchableOpacity style={Styles.passwordIcon}
                onPress={setShowPassword}>

                <Icon name={showPassword ? "eye-outline" : "eye-off-outline"}
                    color="#45B17F" size={25} />
            </TouchableOpacity>}
        </View>
    );
}

export default Input;