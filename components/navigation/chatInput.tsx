import { StyleSheet, View, TextInput, Text } from 'react-native'
import { Button } from '@rneui/themed';
import { useState, useEffect } from 'react'
import {OPEN_AI_KEY, API_URL} from "@env"

type ChatMessage = {
    role: string,
    content: string
}

const ChatInput = () => {
    const [text, setText] = useState<ChatMessage>({role: 'user', content: ''})
    const [chat, setChat] =useState<Array<ChatMessage>>([])

    useEffect(() => {
        function updateChat() {

        }
    },[chat.length])
    
    const onSubmit = async () => {
        const response = await fetch(API_URL, {
            headers: {
                'Authorization': `Bearer ${OPEN_AI_KEY}`,
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: chat,
            }),
        })
        const rawResponse = await response.json()
        const {message, finish_reason} = rawResponse[0]
        setChat([...chat, message])
    }
    

    return (
        <View style={styles.container}>
            <Text>a</Text>
            <TextInput
                style={styles.input}
                onChangeText={(e) => setText({role: 'user', content: e})}
                value={text.content}
                placeholder="Enter your question"
                keyboardType="default"
                multiline
            />
            <Button
                title="Go"
                titleStyle={styles.btnTitle}
                buttonStyle={styles.btn}
                onPress={onSubmit}
            />

        </View>
    )
}

export default ChatInput

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        
    },
    input: {
        height: 40,
        width: '70%',        
        borderWidth: 1,
        borderRadius: 50,
        padding: 10,
    },
    btn: {        
        width: 70,
        borderRadius: 20,
    },
    btnTitle: {
        fontWeight: '700'
    }
})