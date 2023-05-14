import { Pressable, StyleSheet, Text, View } from 'react-native';

import Colors from '../../constants/colors';

function PrimaryButton({ children, onPress }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) =>
                    pressed
                        ? [styles.buttonInnerContainer, styles.pressed]
                        : styles.buttonInnerContainer
                }
                onPress={onPress}
                android_ripple={{ color: Colors.primary500 }}
            >
                <Text style={styles.button}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 8,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,

        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        shadowOpacity: 0.25,
    },
    button: {
        color: Colors.white,
        fontSize: 18,
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.5,
    },
});
