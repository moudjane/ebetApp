import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button, View, ScrollView, Vibration } from 'react-native';

export function LeaderboardScreen() {

    const [leaderboard, SetLeaderboard] = useState([])
    useEffect(() => {
        fetch('http://109.205.56.69:4000/leaderboard')
            .then((response) => response.json())
            .then((json) => {
                SetLeaderboard(json)

            })
    }, []);
    return (
        <View style={styles.containerLive}>
            <View>
                <ScrollView horizontal={false} persistentScrollbar={false}>
                    {leaderboard.map((element, index) => {
                        let dateObject = new Date(element.creation_date).toLocaleDateString('fr-FR')
                        let pos = index + 1;
                        return (
                            <View key={pos} style={styles.bandeau2}>
                                <Text key={pos} style={styles.teext}>{pos}</Text>
                                <Text key={element.username} style={styles.teext}>{element.username} </Text>
                                <Text key={element.creation_date + pos} style={styles.teext}>{element.points} points</Text>
                                <Text key={element.creation_date} style={styles.teext}>{dateObject}</Text>
                            </View>
                        )
                    })
                    }
                </ScrollView>
            </View>
            <StatusBar style="auto" />
        </View >
    )
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

export default LeaderboardScreen;