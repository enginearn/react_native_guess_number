import { View, Image, Text, StyleSheet } from 'react-native';

import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen({roundsNumber, userNumber, onRestart}) {
    return (
        <View style={styles.rootContainer}>
            <Title>Game Over!</Title>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/images/success.png')}
                    style={styles.image}
                />
            </View>
            <Text style={styles.summaryText}>
                Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds
                to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
            </Text>
            <PrimaryButton onPress={onRestart}>NEW GAME</PrimaryButton>
        </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        margin: 30,
        marginVertical: 30,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontFamily: 'Konkhmer-Regular',
        fontSize: 22,
        textAlign: 'center',
        color: '#fff',
        marginVertical: 30,
    },
    highlight: {
        color: '#fff',
        fontFamily: 'Konkhmer-Regular',
        fontSize: 22,
    },
});
