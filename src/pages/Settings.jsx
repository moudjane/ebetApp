import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button, View } from 'react-native';

export function SettingsScreen() {
    return (
        <View style={styles.container}>
            <Text>SETTINGS</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#7CA1B4",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    square: {
        backgroundColor: "#7cb48f",
        width: 100,
        height: 50,
        margin: 8,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default SettingsScreen;