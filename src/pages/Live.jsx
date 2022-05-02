import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button, TouchableOpacity, View, ScrollView } from 'react-native';

export function LiveScreen() {

    const [data, setData] = useState([]);
    const [info, setInfo] = useState([]);
    const [startTime, setStartTime] = useState([]);
    const [PlayersList, setPlayersList] = useState([]);
    const emoji = {
        'tennis': '🎾',
        'baseball': '⚾',
        'table-tennis': '🏓',
        'counter-strike': '🔫',
        'rugby': '🏉',
        "soccer": "⚽",
        "dota-2": "⌨️",
        'handball': '🤾',
        'squash': '🎾',
        'electronic-leagues': '🎮',
        'fifa': '⚽🎮'
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
        info.map(element => element.fixtureList.map(element => setStartTime(element.data.startTime), element.fixtureList.map(element => element.data.competitors.map(element => setPlayersList([...PlayersList, element.name])))))
    }

    return (
        <View style={styles.containerLive} >
            <SafeAreaView>
                <View style={styles.containerLive}>
                    <ScrollView horizontal={true} persistentScrollbar={false}>
                        {data.map(element => <TouchableOpacity key={element} onPress={() => gameList(element)} style={styles.square}>
                            <Text key={element + 1}>{emoji[element]}</Text>
                            {console.log(element)}
                            <Text key={element} style={styles[element]}>{element}</Text>
                        </TouchableOpacity>
                        )}
                    </ScrollView>
                    <View style={styles.matchLive}>
                    </View>
                    {info.map(element =>
                        <Text key={element.name}>{element.name}{"\n"}{startTime}{"\n"}{PlayersList}</Text>
                    )}
                </View>
                {/* <StatusBar style="auto" /> */}
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
    },
    square: {
        backgroundColor: "#7cb48f",
        width: 150,
        height: 50,
        margin: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    matchLive: {
        flex: 1,
        alignItems: "center",
    },
    startTime: {
        color: '#FF0000'
    },

});
/*
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#7CA1B4",
        flex: 1,
        flexDirection: 'row',
        flexWrap: "wrap",
        alignItems: 'center',
        justifyContent: 'center',
    },
    square: {
        backgroundColor: "#7cb48f",
        width: 100,
        height: 100,
        margin: 4,
    },

});
*/

export default LiveScreen;