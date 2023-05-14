import { StyleSheet, View } from 'react-native';

function Card({ children }) {
    return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
    card: {
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#72063c',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        shadowOpacity: 0.25,
    },
});
