import { StyleSheet } from "react-native"

const styles= StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#E5A478",
    },
    content: {
        flex: 1,
        justifyContent: "flex-start",
        alignContent: "center",
        margin: 10,
        borderRadius: 30,
        shadowColor: "gray",
        shadowOffset:{
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: "#5E4E4E",
        marginBottom: 10,
    },
    image: {
        margin: 10,
        marginTop: 10,
        marginBottom: 20,
        position: "relative",
        alignSelf: "center",
        width: 200,
        height: 200,
        borderRadius: 20,
        borderColor: "gray",
        borderWidth: 3,
    },
    instruction: {
        flex: 3,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        margin: 0,
        padding: 0,
        marginBottom: 5,
    },
    instruction_value: {
        color: "#ECECEC",
        fontSize: 12,
        textAlign: "justify",
        marginLeft: 10,
        marginRight: 10,
    },
    name: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        margin: 0,
        padding: 0,
        marginBottom: 5,
    },
    name_value: {
        color: "#ECECEC",
        fontSize: 22,
        textAlign: "center",
        marginBottom: 10,
    },
    area_values: {
        color: "#8a8b8c",
        fontSize: 18,
        textAlign: "center",
    },
    ingredient_value: {
        color: "#ECECEC",
        fontSize: 12,
        marginLeft: 24,
    },

})

export default styles