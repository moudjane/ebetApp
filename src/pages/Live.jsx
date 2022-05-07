import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button, TouchableOpacity, View, ScrollView } from 'react-native';
import { borderBottomColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export function LiveScreen() {
    const [matchsData, setMatchsData] = useState({ name: [], players: [] });
    const [sportsData, setSportsData] = useState([]);
    const emoji = {
        'badminton': '🏸',
        'tennis': '🎾',
        'baseball': '⚾',
        'basketball': '🏀',
        'table-tennis': '🏓',
        'counter-strike': '🔫',
        'rugby': '🏉',
        "soccer": "⚽",
        "dota-2": "⌨️",
        'handball': '🤾',
        'squash': '🎾',
        'electronic-leagues': '🎮',
        'fifa': '⚽🎮',
        'cricket': '🏏',
        'league-of-legends': '🤬',
        'darts': '🎯',
        'volleyball': '🏐',
        'ice-hockey': '🏒',
        'futsal': '👟'
    }


    // Récupère les matchs en direct en fonction du sport séléctionné
    function gameList(selectedSport) {
        fetch(`http://109.205.56.69:4000/live/:${selectedSport}/:10/:10`)
            .then((response) => response.json())
            .then((json) => {
                let name = [];
                let players = [];
                json.slugSport.tournamentList.map((element, index) => {
                    name.push(element.name);
                    players.push(element.fixtureList[0].data.competitors);
                });
                setMatchsData({ name: name, players: players });
                console.log("matchsData");
                console.log(matchsData);
            });
    }

    // Récupère les sports en direct
    useEffect(() => {
        fetch('http://109.205.56.69:4000/sports')
            .then((response) => response.json())
            .then((json) => {
                setSportsData(json)
            })
    }, []);

    return (
        <View style={styles.containerLive} >
            <SafeAreaView>
                <View style={styles.containerLive}>
                    <ScrollView horizontal={true} persistentScrollbar={false}>
                        {sportsData.map(element =>
                            <TouchableOpacity
                                key={element}
                                onPress={() => gameList(element)} style={styles.square}>
                                <Text key={element + 1}>{emoji[element]}</Text>
                                <Text key={element} style={styles.teext}>{element}</Text>
                            </TouchableOpacity>
                        )}
                    </ScrollView>
                    <ScrollView horizontal={false} persistentScrollbar={false}>
                        <View>
                            {matchsData.name.map((element, index) => {
                                return (
                                    <View style={styles.bandeau}>
                                        <Text style={styles.teext}>
                                            {element}{'\n'}
                                        </Text>
                                        <View style={styles.linePlayers}>
                                            {matchsData.players[index].map((element, index) => {
                                                return (
                                                    <Text key={index + element} style={[styles.player, index ? styles.right : styles.left]}>
                                                        {element.name}
                                                    </Text>
                                                )
                                            }
                                            )}
                                        </View>
                                    </View>
                                )
                            }
                            )}
                        </View>
                        <View style={{ height: 96 }} />
                    </ScrollView>
                </View>
                <StatusBar style="auto" />
            </SafeAreaView >
        </View >
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
        backgroundColor: "#eca351",
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
    }
});

export default LiveScreen;