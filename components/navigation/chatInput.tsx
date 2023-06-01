import { StyleSheet, 
    View, TextInput, StyleProp } from 'react-native'
import { Button } from '@rneui/themed';
import { useState } from 'react'


type ChatInputProps = {
    onSubmit: (text: string) => void,

}

const ChatInput = ({ onSubmit }: ChatInputProps) => {
    const [text, setText] = useState<string>('')

    const handleOnSubmit = (): void => {
        onSubmit(text)
        setText('')
    }


    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                onChangeText={(e) => setText(e)}
                value={text}
                placeholder="Enter your question"
                keyboardType="default"
                multiline
            />
            <Button
                title="Go"
                titleStyle={styles.btnTitle}
                buttonStyle={styles.btn}
                onPress={handleOnSubmit}
            />
        </View>
    )
}

export default ChatInput

const styles= StyleSheet.create({

    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 20,

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