import { View, Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function NumberContainer({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.white,
        borderRadius: 6,
        padding: 12,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        fontFamily: 'Konkhmer-Regular',
        color: Colors.white,
        fontSize: 22,
        // fontWeight: 'bold',
    },
});
