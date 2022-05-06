import React from 'react';
import { StyleSheet, View, TouchableHighlight, ToastAndroid, Alert } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import { launchImageLibrary } from 'react-native-image-picker';

export default function SettingsScreen() {
    const [Pic, SetPic] = React.useState('');
    // For show toast msg
    const setToastMsg = msg => {
        ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);
    };

    const uploadImage = () => {
        let options = {
            mediaType: 'photo',
            quality: 1,
            includeBase64: true,
        };

        launchImageLibrary(options, response => {
            if (response.didCancel) {
                setToastMsg('Cancelled image selection');
            } else if (response.errorCode == 'permission') {
                setToastMsg('permission not satisfied');
            } else if (response.errorCode == 'others') {
                setToastMsg(response.errorMessage);
            } else if (response.assets[0].fileSize > 2097152) {
                Alert.alert('Maximum image size exceeded',
                    'Please choose image under 2 MB',
                    [{ text: 'OK' }],
                );
            } else {
                SetPic(response.assets[0].base64);
            }
        });
    };

    const removeImage = () => {
        SetPic("")
        setToastMsg("Image removed");
    }
    return (
        <View>
            <View style={styles.centerContent}>
                <TouchableHighlight
                    onPress={() => alert('pressed')}
                    unerlayColor='rgba(0,0,0,0)'>
                    <Avatar.Image
                        size={250}
                        source={{ uri: "data:image/png;base64," + Pic }}
                    />
                </TouchableHighlight>
            </View>
            <View style={[styles.centerContent, { marginTop: 25, flexDirection: 'row' }]}>
                <Button
                    mode='contained'
                    onPress={() => uploadImage()}>
                    Upload image
                </Button>
                <Button
                    mode='contained'
                    style={{ marginLeft: 25 }}
                    onPress={() => removeImage()}>
                    Remove image
                </Button>
            </View>
        </View>
    );
}

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
        borderRadius: 10,
    },
    bandeau: {
        backgroundColor: 'white',
        color: 'white',
        borderRadius: 10,
        padding: 10,
        margin: 20,
        backgroundColor: "#7cb48f",
    },
    centerContent: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    }
});