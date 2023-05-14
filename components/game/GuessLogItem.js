import { StyleSheet, View, Text } from "react-native";

import Colors from "../../constants/colors";

function GuessLogItem({ roundNumber, guess }) {
    return (
        <View style={styles.listItem}>
            <Text style={styles.itemText}>#{roundNumber}</Text>
            <Text style={styles.itemText}>Opponent's Guess {guess}</Text>
        </View>
    );
}

export default GuessLogItem;

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8,
        marginVertical: 8,
        backgroundColor: Colors.primary500,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        width: '100%',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        shadowOpacity: 0.25,
    },
    itemText: {
        color: '#fff',
        fontFamily: 'Konkhmer-Regular',
        fontSize: 18,
    },
});
