import React, { useState, useEffect } from 'react';
import { StatusBar } from "expo-status-bar";
import { TextInput, StyleSheet, Text, KeyboardAvoidingView, FlatList, View, Image } from "react-native";
import { TouchableOpacity } from 'react-native';
import axios from 'axios';

async function sendMessage(text) {
    const response = await axios.post('http://localhost:3000/message', { text });
    return response.data;
}


export default function HomeRender() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const newMessages = [];
        for (let i = 1; i <= 50; i++) {
            newMessages.push({ id: i.toString(), text: `Mensagem ${i}` });
        }
        setMessages(newMessages);
    }, []);

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style="auto" />
            <FlatList
                data={messages}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <Text style={styles.textmensagem}>{item.text}</Text>}
                style={styles.messages}
            />
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Mensagem.." />
                <TouchableOpacity style={styles.inputbotao}>
                    <Image style={styles.inputimg} source={require("./style/5373244.png")} />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textmensagem: {
        fontSize: 20,
        paddingBottom: 10,
    },
    messages: {
        flex: 1,
        width: '100%',
        top: 50,
        left: 20,
        maxHeight: 600,
        position: "absolute"
    },
    inputContainer: {
        position: 'absolute',
        bottom: -1,
        right: 1,
        backgroundColor: "brown",
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 50,
        paddingTop: 30,

    },
    input: {
        borderWidth: 1,
        borderColor: "black",
        padding: 15,
        width: 300,
        fontSize: 20,
        borderRadius: 50,
        backgroundColor: "white"
    },
    inputimg: {
        width: 40,
        height: 50,

    },
    inputbotao: {
        position: "absolute",
        left: 320,
        top: 35
    }

});

