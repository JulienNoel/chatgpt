import { StyleSheet, Text, View } from 'react-native'

type ChatMessageProps = {
    message: string,
    role: string
}


const ChatMessage = ({ message, role }: ChatMessageProps) => {

    
    return (

        <View style={[styles.container,role === 'user'? styles.userAlign : styles.systemAlign]}>
            <Text style={[styles.text,role === 'user'? styles.user : styles.system]} selectable={true}>{message}</Text>
        </View>

    )
}

export default ChatMessage

const styles = StyleSheet.create({
    text: {
        borderWidth: 1,
        borderRadius: 20,
        padding: 15,       
        textAlignVertical: 'top',
        color: 'white',
        fontWeight: '500'
    },
    container:{        
        maxWidth: '80%',
        marginHorizontal: 15,
        marginVertical: 5,
                
    },
    user: {        
        backgroundColor: 'deepskyblue',
        borderColor: 'deepskyblue'  
    },
    system: {        
        backgroundColor: 'slategrey',
        borderColor: 'slategrey'  
    },
    userAlign: {
        alignSelf: 'flex-end'
    },
    systemAlign: {
        alignSelf: 'flex-start' 
    }

})