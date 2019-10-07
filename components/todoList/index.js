import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Icon, Text, Content, Container } from 'native-base';
import { connect } from 'react-redux';

class TodoList extends React.Component {
    render() {
        return (
            <Container>
                <Content>
                    {this.props.todos.map((item, index) =>
                        <View key={index} style={styles.container}>
                            <Text style={styles.todoText}>{item}</Text>
                            <Button danger onPress={() => this.props.handleDelete(index)}>
                                <Icon name='md-trash' />
                            </Button>
                        </View>
                    )}
                    {this.props.todos.length > 0 ?
                        <Button
                            block info
                            style={styles.button}
                            onPress={() => this.props.handleClearList()}
                        >
                            <Text style={styles.btnText}>Clear List</Text>
                        </Button>
                        : null
                    }
                </Content>
            </Container >
        );
    }
}
function mapStateToProps(state) {
    return {
        todos: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleClearList: () => dispatch({ type: 'CLEAR_LIST' }),
        handleDelete: data => dispatch({ type: 'DELETE', payload: data })

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)


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
    },
    button: {
        margin: 15,
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    }
})