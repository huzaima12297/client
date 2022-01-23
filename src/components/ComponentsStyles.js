import { StyleSheet } from "react-native"

export default StyleSheet.create({
    inputContainer: {
        borderColor: "lightgrey",
        borderWidth: 1,
        borderRadius: 10,
        alignSelf: 'stretch',
        marginTop: 25,
        paddingHorizontal: 10,
        backgroundColor: 'white'
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerContainer: {
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    headerText: {
        color: 'black',
        fontSize: 16
    },
    button: {
        backgroundColor: "#45B17F",
        paddingVertical: 12,
        borderRadius: 25,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: '500'
    },
    skipText: {
        color: 'black',
        fontSize: 13,
        textAlign: 'right',
        textDecorationLine: "underline",
        marginRight: 20
    },
    Dropdown: {
        paddingVertical: 15
    },
    dropDownText: {
        fontSize: 14,
        color: '#B0B0B0'
    },
    phoneInput: {
        borderColor: "lightgrey",
        borderWidth: 1,
        borderRadius: 10,
        alignSelf: 'stretch',
        backgroundColor: 'white',
        marginTop: 25,
        paddingHorizontal: 10,
        paddingVertical: 3,
    },
    flagStyle: {
        fontSize: 25,
        marginRight: 10
    },
    icon: {
        flex: 1,
        color: '#B0B0B0'
    },
    selfCenter: {
        alignSelf: 'center'
    }
})