import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Icon, Text, Content, Container, Spinner } from 'native-base';
import { connect } from 'react-redux';
import Middleware from '../../store/middleware/middleware'

class TodoList extends React.Component {
    render() {
        const { todos, handleDelete, handleClearList } = this.props;
        return (
            <Container>
                {todos ?
                    <Content>
                        {todos.map((item, index) =>
                            <View key={index} style={styles.container}>
                                <Text style={styles.todoText}>{item}</Text>
                                <Button danger onPress={() => handleDelete(index)}>
                                    <Icon name='md-trash' />
                                </Button>
                            </View>
                        )}
                        {todos.length > 0 ?
                            <Button
                                block info
                                style={styles.button}
                                onPress={() => handleClearList()}
                            >
                                <Text style={styles.btnText}>Clear List</Text>
                            </Button>
                            : null
                        }
                    </Content>
                    : <Spinner color="blue" />}
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
        handleDelete: data => dispatch(Middleware.deleteItem(data)),
        handleClearList: () => dispatch(Middleware.clearList())
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);