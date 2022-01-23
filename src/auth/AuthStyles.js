import { StyleSheet } from "react-native"

export default StyleSheet.create({
    fullImage: {
        height: "100%",
        width: "100%",
        resizeMode: 'center'
    },
    fullContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        marginHorizontal: 20
    },
    centerContainer: {
        justifyContent: 'center',
        flex: 1
    },
    or: {
        marginVertical: 30,
        alignSelf: 'center'
    },
    rowContainer: {
        justifyContent: 'center',
        marginBottom: 20,
        flexDirection: 'row',
        marginTop: 20,
    },
    passwordInput: {
        alignSelf: 'stretch',
        flexDirection: 'row'
    },
    forgotText: {
        color: 'black',
        alignItems: 'flex-end',
        textAlign: 'right',
        textDecorationLine: "underline",
        marginTop: 15,
        fontWeight: "500",
        marginBottom: 30,
    },
    boldText: {
        color: 'black',
        fontWeight: '500',
        textDecorationLine: "underline"
    },
    checkBoxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 30
    },
    verificationText: {
        marginTop: 20,
    },
    input: {
        textAlignVertical: 'top'
    },
    industry: {
        flex: 1,
        marginRight: 5
    },
    row: {
        flexDirection: 'row'
    },
    dateStyle: {
        flex: 1,
        marginLeft: 5,
        alignItems: 'center',
        flexDirection: 'row'
    }
})