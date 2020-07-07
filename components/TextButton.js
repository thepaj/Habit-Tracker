import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { pink } from '../utils/colors';

export default function TextButton({ onPress, children, style = {} }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.btn}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        textAlign: 'center',
        backgroundColor: pink,
        color: '#000000',
        fontSize: 15,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: 250,
        borderRadius: 10,
    }
})