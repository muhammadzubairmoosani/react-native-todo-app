import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Icon, Text } from 'native-base';
import firebase from 'firebase';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
        firebase.database().ref("todos").on('value', data => {
            if (data.val() && data.val().value) {
                this.setState({ todos: data.val().value })
            }
        })
    }

    render() {
        return (
            <View >
                {/* {this.state.todos.map((item, index) =>
                    <View style={styles.container}>
                        <Text style={styles.todoText}>{item}</Text>
                        <Button danger
                            onPress={() => this.props.handleDelete(index)}
                        >
                            <Icon name='md-trash' />
                        </Button>
                    </View>
                )} */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'lightgray',
        borderWidth: 0.5,
        display: 'flex',
        margin: 10
    },
    todoText: {
        marginLeft: 5
    }
})