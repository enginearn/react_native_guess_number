import { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Alert,
    FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import NumberContainer from '../components/game/NumberContainer';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import GuessLogItem from '../components/game/GuessLogItem';

function generateRandomBetween(min, max, exclude) {
    min = Math.ceil(min);
    max = Math.floor(max);

    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(
        1, // minBoundary,
        100, // maxBoundary,
        userNumber
    );
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect(() => {
        if (currentGuess === userNumber) {
            // Alert.alert('Game over!', 'You won!', [{ text: 'Okay' }]);
            onGameOver(guessRounds.length);
        } else {
            // Alert.alert('Game over!', 'You lost!', [{ text: 'Okay' }]);
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

    function nextGuessHandler(direction) {
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie!", 'You know that this is wrong...', [
                { text: 'Sorry!', style: 'cancel' },
            ]);
            return;
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess - 1;
        } else {
            minBoundary = currentGuess + 1;
        }

        console.log(minBoundary, maxBoundary, currentGuess);
        const newRndNumber = generateRandomBetween(
            minBoundary,
            maxBoundary,
            currentGuess
        );
        setCurrentGuess(newRndNumber);
        setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
    }

    const guessRoundsListLength = guessRounds.length;

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            {/* <Text>{currentGuess}</Text> */}
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>
                    Higher or lower
                </InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={nextGuessHandler.bind(this, 'lower')}
                        >
                            <Ionicons
                                name="md-remove"
                                size={24}
                                color="white"
                            />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={nextGuessHandler.bind(this, 'greater')}
                        >
                            <Ionicons name="md-add" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View style={styles.listContainer}>
                {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
                {/* {guessRounds.map(guessRound => (
                    <Text key={guessRound}>{guessRound}</Text>
                ))} */}
                <FlatList
                    data={guessRounds}
                    renderItem={(itemData) => (
                        <GuessLogItem
                            roundNumber={guessRoundsListLength - itemData.index}
                            guess={itemData.itemr}
                        />
                    )}
                    keyCodeAllowed={(item) => item}
                />
            </View>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 30,
        alignItems: 'center',
    },
    instructionText: {
        marginBottom: 20,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 15,
    },
    buttonContainer: {
        width: 100,
    },
    restartButtonContainer: {
        marginTop: 20,
    },
    listContainer: {
        flex: 1,
        width: '100%',
    },
});
