import { StyleSheet } from "react-native";

const styles= StyleSheet.create({
    meal:{
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
    },
    spacing:{
        flex: 1,
        flexDirection: "row",
        paddingRight: 10,
        paddingTop: 20,
        paddingLeft: 10,
    },
    image:{
        position: 'relative',
        width: 180,
        height: 180,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius:10,
    },
    meal_info:{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "flex-start",
        paddingLeft: 10,
        height: "100%",
        backgroundColor:"#5E4E4E",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        
    },
    meal_name:{
        height:50,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        color: "#fefefe",
        fontSize:20,
        fontWeight: "bold",
        textAlignVertical: "center",
    },

})

export default styles