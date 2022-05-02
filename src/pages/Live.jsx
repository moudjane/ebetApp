import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button, TouchableOpacity, View } from 'react-native';

export function LiveScreen() {

    const [data, setData] = useState([]);
    const [info, setInfo] = useState([]);
    const [startTime, setStartTime] = useState([]);
    const [PlayersList, setPlayersList] = useState([]);

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
        <View style={styles.container} >
            <SafeAreaView style={styles.container}>
                <View style={styles.containerLive}>
                    {data.map(element => <TouchableOpacity key={element} onPress={() => gameList(element)} style={styles.buttonLive}>
                        <Text key={element} style={styles[element]}>{element}</Text>
                    </TouchableOpacity>
                    )}
                    {info.map(element =>
                        <Text key={element.name}>{element.name}{"\n"}{startTime}{"\n"}{PlayersList}</Text>
                    )}
                </View>
                {/* {<View><Text>{info}</Text></View>} */}
                <StatusBar style="auto" />
            </SafeAreaView>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex'
    },
    buttonLive: {
        display: 'flex'
    },
    basketball: {
    },
    containerLive: {
        display: 'flex'
    }
});

export default LiveScreen;