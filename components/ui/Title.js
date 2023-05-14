import { Text, StyleSheet } from 'react-native';

function Title({ children }) {
    return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Konkhmer-Regular',
        fontSize: 30,
        marginVertical: 10,
        color: '#fff',
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 6,
        padding: 12,
    },
});
