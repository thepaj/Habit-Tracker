import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import TextButton from './TextButton';
import { addHabit } from '../actions';
import { white, blueGreen, pink, lightGreen } from '../utils/colors';

class NewHabit extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Create New Habit</Text>
                <TextInput
                    placeholder='New habit'
                    //underlineColorAndroid={grey}
                    style={styles.inputField}
                //value={habit}
                //onChangeText={(deckName) => this.setState({ deckName })}
                />
                <TextButton
                //onPress={() => this.addHabit(habit)}
                >
                    CREATE
                </TextButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: white,
        flex: 1,
        alignItems: 'center',
        margin: 50,
        width: 300,
    },
    header: {
        color: blueGreen,
        padding: 20,
        fontSize: 80,
        fontWeight: 'bold',
    },
    inputField: {
        backgroundColor: lightGreen,
        width: 250,
        marginBottom: 20,
        marginTop: 40,
        paddingHorizontal: 20,
        paddingVertical: 10,
    }
})

export default NewHabit;