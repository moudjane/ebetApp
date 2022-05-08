import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button, View, Vibration } from 'react-native';

export function UpcommingScreen() {
    const ONE_SECOND_IN_MS = 1000;

    const PATTERN = [1 * ONE_SECOND_IN_MS, 2 * ONE_SECOND_IN_MS, 3 * ONE_SECOND_IN_MS];
    return (
        <View style={styles.container}>
            <Text style={styles.teext2}>COMING SOON...{'\n'}</Text>
            <Text style={styles.teext}>You can enjoy this button meanwhile:{'\n'}</Text>
            <Button
                title="React Native Functionnality"
                onPress={() => Vibration.vibrate(3 * ONE_SECOND_IN_MS)}
                color='#5AB078'
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    containerLive: {
        backgroundColor: "#519aec",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        color: '#FFFFFF'
    },
    square: {
        backgroundColor: "#eca351",
        width: 150,
        height: 50,
        margin: 8,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        color: '#FFFFFF'
    },
    bandeau: {
        backgroundColor: "#5AB078",
        color: '#FFFFFF',
        borderRadius: 10,
        padding: 10,
        margin: 20,
        height: 120,
        textAlign: 'center'
    },
    teext: {
        color: '#ffffff',
        fontSize: 15,
        textAlign: 'center'
    },
    left: {
        color: '#FF0000',
    },
    right: {
        color: '#0000FF',
    },
    player: {
        fontSize: 13.5,
    },
    linePlayers: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'space-between',
    },
    bandeau2: {
        backgroundColor: "#5AB078",
        color: '#FFFFFF',
        borderRadius: 10,
        padding: 10,
        margin: 20,
        height: 120,
        width: 360,
        textAlign: 'center'
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#519aec",
    }
});

export default UpcommingScreen;