import React from 'react';
import Styles from './ComponentsStyles';
import ModalDropdown from 'react-native-modal-dropdown';

function Dropdown(props) {
    const { defaultValue, options, onSelectType } = props

    return (
        <ModalDropdown
            style={[Styles.inputContainer, Styles.Dropdown]}
            defaultTextStyle={Styles.dropDownText}
            defaultValue={defaultValue}
            options={options}
            dropdownStyle={{ height: -1 }}
            isFullWidth={true}
            onSelect={onSelectType}
        />
    );
}
export default Dropdown;