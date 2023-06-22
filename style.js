import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#FFFFFF",
        // alignItems: "center",
        // justifyContent: "center",
    },

    categoryContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50
    },

    category: {
        width: 150,
        height: 150,
        margin: 10,
        borderRadius: 15,
        backgroundColor: "#FFFFFF",
        shadowColor: "#000000",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
        justifyContent: "center",
        alignItems: "center",
    },

    categoryTitle: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "#000000",
    }
})

export default styles