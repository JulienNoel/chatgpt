import {StyleSheet} from 'react-native'
import { Button } from '@rneui/themed'
import React from 'react'

type ResetBtnProps = {
    onReset: () => void
}

export const ResetButton = ({onReset}: ResetBtnProps) => {

    return (
        <Button
            title="Reset"
            titleStyle={styles.btnTitle}
            buttonStyle={styles.btn}
            onPress={onReset}
            color='warning'
             />
    )
}

const styles = StyleSheet.create({
    btn: {
        width: 70,
        borderRadius: 20,        
        alignSelf: 'flex-end',
        marginRight: 10,
        marginBottom: 10
        },
    btnTitle: {
        fontWeight: '700',
    },
})