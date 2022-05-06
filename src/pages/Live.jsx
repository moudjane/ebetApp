import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button, TouchableOpacity, View, ScrollView } from 'react-native';
import { borderBottomColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export function LiveScreen() {

    const [data, setData] = useState([]);
    const [info, setInfo] = useState([]);
    const [startTime, setStartTime] = useState([]);
    const [playersList, setPlayersList] = useState([]);
    const [outcomes, setOutcomes] = useState([]);
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
        'ice-hockey': '🏒'
    }

    function gameList(ActiveGamemode) {
        fetch(`http://109.205.56.69:4000/live/:${ActiveGamemode}/:10/:10`)
            .then((response) => response.json())
            .then((json) => {
                setInfo(json.slugSport.tournamentList)
                Players();
            })
    }
    useEffect(() => {
        fetch('http://109.205.56.69:4000/sports')
            .then((response) => response.json())
            .then((json) => {
                setData(json)
            })
        gameList('snooker')
    }, []);
    function Players() {
        // setPlayersList([])
        // setOutcomes([])
        info.map(element => element.fixtureList.map(element => setStartTime(element.data.startTime), element.fixtureList.map(element => element.data.competitors.map(element => setPlayersList([...playersList, element.name])))))
        info.map(element => element.fixtureList.map(element => setStartTime(element.data.startTime), element.fixtureList.map(element => element.groups.map(element => element.templates.map(element => element.markets.map(element => element.outcomes.map(element => setOutcomes([...outcomes, element.odds]))))))))
        // info.map(element => element.fixtureList.map(element => setStartTime(element.data.startTime), element.fixtureList.map(element => element.data.competitors.map(element => setPlayersList([...playersList, element.name])))))

    }

    return (
        <View style={styles.containerLive} >
            <SafeAreaView>
                <View style={styles.containerLive}>
                    <ScrollView horizontal={true} persistentScrollbar={false}>
                        {data.map(element =>
                            <TouchableOpacity
                                key={element}
                                onPress={() => gameList(element)} style={styles.square}>
                                <Text key={element + 1}>{emoji[element]}</Text>
                                <Text key={element} style={styles.teext}>{element}</Text>
                            </TouchableOpacity>
                        )}
                    </ScrollView>
                    <ScrollView horizontal={false} persistentScrollbar={false}>
                        <View style={styles.matchLive} />
                        {info.map(element =>
                            <View key={element.name} style={styles.bandeau}>
                                <Text key={element.name} style={styles.teext}>{element.name}{"\n"}{startTime}{"\n"}{playersList}{"\n"}{outcomes}</Text>
                                {/* <Text key={element.name}>{element.name}{"\n"}{startTime}{"\n"}{playersList}{"\n"}{outcomes}</Text> */}
                                {/* <Text key={element.odds}>{element.odds}{"\n"}{outcomes[0]}{"\n"}{outcomes[1]}</Text> */}
                                {/* {console.log(element.odds)} */}
                            </View>
                        )}
                    </ScrollView>
                </View>
                <StatusBar style="auto" />
            </SafeAreaView>
        </View >
    );
};

const styles = StyleSheet.create({
    containerLive: {
        backgroundColor: "#7CA1B4",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        color: '#FFFFFF'
    },
    square: {
        backgroundColor: "#7cb48f",
        width: 150,
        height: 50,
        margin: 8,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        color: '#FFFFFF'
    },
    bandeau: {
        backgroundColor: 'white',
        color: '#FFFFFF',
        borderRadius: 10,
        padding: 10,
        margin: 20,
        backgroundColor: "#7cb48f",
    },
    teext: {
        color: '#ffffff'
    }
});

export default LiveScreen;