import { useState, useEffect, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/CameOverScreen';

export default function App() {
    const [userNumber, setUserNumber] = useState();
    const [gameIsOver, setGameIsOver] = useState(true);
    const [guessRounds, setGuessRounds] = useState(0);

    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                // Keep the splash screen visible while we fetch resources
                await SplashScreen.preventAutoHideAsync();
                // Pre-load fonts, make any API calls you need to do here
                // await Font.loadAsync(Entypo.font);
                await Font.loadAsync({
                    // Load a font `Montserrat` from a static resource
                    'BlackOpsOne-Regular': require('./assets/fonts/BlackOpsOne-Regular.ttf'),
                    'Konkhmer-Regular': require('./assets/fonts/KonkhmerSleokchher-Regular.ttf'),
                });
                // Artificially delay for two seconds to simulate a slow loading
                // experience. Please remove this if you copy and paste the code!
                await new Promise((resolve) => setTimeout(resolve, 2000));
            } catch (e) {
                console.warn(e);
            } finally {
                // Tell the application to render
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            // This tells the splash screen to hide immediately! If we call this after
            // `setAppIsReady`, then we may see a blank screen while the app is
            // loading its initial state and rendering its first pixels. So instead,
            // we hide the splash screen once we know the root view has already
            // performed layout.
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    function pickedNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    }

    function gameOverHandler(numberOfRounds) {
        setGameIsOver(true);
        setGuessRounds(numberOfRounds);
    }

    function restartGameHandler() {
        setGuessRounds(0);
        setUserNumber(null);
        // setGameIsOver(true);
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

    if (userNumber) {
        screen = (
            <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
        );
    }

    if (gameIsOver && userNumber) {
        screen = (
            <GameOverScreen
                userNumber={userNumber}
                roundsNumber={guessRounds}
                onRestart={restartGameHandler}
            />
        );
    }

    return (
        <LinearGradient
            onLayout={onLayoutRootView}
            colors={['#3b021f', '#ddb52f']}
            style={styles.rootScreen}
        >
            <ImageBackground
                source={require('./assets/images/background.png')}
                style={styles.rootScreen}
                resizeMode="cover"
                imageStyle={styles.backgroundImage}
            >
                <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
            </ImageBackground>
            <StatusBar style="auto" />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.3,
    },
});
