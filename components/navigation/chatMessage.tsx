import {StyleSheet, Text, Animated,
    Easing} from 'react-native'
import { useEffect, useRef } from 'react'
import type { EasingFunction } from 'react-native';

type ChatMessageProps = {
    message: string,
    role: string
}


const ChatMessage = ({ message, role }: ChatMessageProps) => {

    const opacity = useRef(new Animated.Value(0)).current;

    const animate = (easing: EasingFunction) => {
        opacity.setValue(0);
        Animated.timing(opacity, {
            toValue: 1,
            duration: 1000,
            easing,
            useNativeDriver: true,
        }).start();
    };

    const size = opacity.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
    });

    const animatedStyles = [
        styles.container,
        {
            opacity,
        },
        {
            transform: [
                {
                    scale: size,
                },
            ],
        },
        role === 'user' ? styles.userAlign : styles.systemAlign
    ];

    useEffect(() => {        
        animate(Easing.in(Easing.elastic(1)));        
      }, []);

    return (

        <Animated.View style={animatedStyles}>
            <Text style={[
                styles.text,
                role === 'user' ? styles.user : styles.system
            ]}
                selectable={true}
            >
                {message}
            </Text>
        </Animated.View>

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
    container: {
        maxWidth: '80%',
        marginHorizontal: 15,
        marginVertical: 5,

    },
    user: {
        backgroundColor: 'deepskyblue',
        borderColor: 'deepskyblue'
    },
    system: {
        backgroundColor: '#3FA93B',
        borderColor: '#3FA93B'
    },
    userAlign: {
        alignSelf: 'flex-end'
    },
    systemAlign: {
        alignSelf: 'flex-start'
    }

})