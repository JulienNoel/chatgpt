import React from 'react'
import { StyleSheet, View, FlatList, Keyboard } from 'react-native'
import { useState, useEffect, useRef } from 'react'
import { OPEN_AI_KEY, API_URL } from "@env"
import ChatMessage from './chatMessage';
import ChatInput from './chatInput';
import Waiting from './waiting';
import { ResetButton } from '../resetButton';

type ChatMessage = {
  role: string,
  content: string
}

function HomeScreen({ navigation }) {

  const [chat, setChat] = useState<Array<ChatMessage>>([])
  const [isSubmit, setIsSubmit] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const scrollRef = useRef<FlatList>(null);


  useEffect(() => {
    async function updateChat() {
      try{
        const response = await fetch(API_URL, {
          headers: {
            'Authorization': `Bearer ${OPEN_AI_KEY}`,
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: chat,
            //temperature: 1, //entre 0 et 2
  
          }),
        })
        const rawResponse = await response.json()
  
        const { message, finish_reason } = rawResponse.choices[0]      
        setChat(prevChat => [...prevChat, message])
        setIsLoading(false)
      }catch (error){
        console.error(error)
      }
      
    }
    if (chat.length > 0) {
      updateChat()
    }

  }, [isSubmit])


  const onSubmit = (text: string): void => {
    const message: ChatMessage = { role: 'user', content: text.trim() }
    setChat(prevChat => [...prevChat, message])
    setIsSubmit(text)
    setIsLoading(true)
    Keyboard.dismiss()
  }

  const onReset = (): void => {
    setChat([])
  }

  return (
    <View style={styles.container}>
      <ResetButton onReset={onReset} />
      <FlatList
        ref={scrollRef}
        data={chat}
        renderItem={({ item }) => 
        <ChatMessage message={item.content.trim()} role={item.role} />
      }
        keyExtractor={item => item.content}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<Waiting isLoading={isLoading} />}
        onContentSizeChange={() => {
          if (chat.length > 0) {
            scrollRef.current?.scrollToEnd();
          }
        }}

      />
      <ChatInput onSubmit={onSubmit} />
    </View>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '15%',
  },

})