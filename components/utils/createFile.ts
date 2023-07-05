import { DocumentDirectoryPath, writeFile } from 'react-native-fs';
import ChatMessage from '../navigation/chatMessage';

type TProps = typeof ChatMessage[]

export const createFile = async (
    chatMessages: TProps ): Promise<void> => {
    const path = `${DocumentDirectoryPath}/${Date.now()}.txt`;
    const savedText = JSON.stringify(chatMessages)

    try {
        await writeFile(path, savedText, 'utf8')       
      } catch (e) {
        console.log('error', e);
      }
    
}


