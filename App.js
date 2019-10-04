import React from 'react';
import {
  Container,
  Button,
  Header,
  Body,
  Title,
  Content,
  Text
} from 'native-base';

import Textbox from './components/inputField';
import TodoList from './components/todoList';
import { StyleSheet } from 'react-native';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyC2_BS8LnF16Vou0ny3uLyy00aVzcq7usw",
  databaseURL: "https://database-demo-94c6a.firebaseio.com",
  projectId: "database-demo-94c6a",
  appId: "1:417622674892:web:1d8fed13b07f7e887ba169",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      value: ''
    }
    firebase.database().ref("todos").on('value', data => {
      if (data.val() && data.val().value) {
        this.setState({ todos: data.val().value })
      }
    })
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClearList = this.handleClearList.bind(this);
  }

  handleChange = text => this.setState({ value: text });

  addToDatabase = todos => firebase.database().ref('todos').set({ value: todos });

  handleClearList = () => this.setState({ todos: [] }, () => this.addToDatabase(this.state.todos))

  handleDelete(index) {
    let arr = this.state.todos;
    arr.splice(index, 1);
    this.setState({ todos: arr },
      () => this.addToDatabase(this.state.todos));
  }

  handleSubmit() {
    let arr = [];
    arr.push(this.state.value);
    this.setState({ todos: this.state.todos.concat(arr), value: '' },
      () => this.addToDatabase(this.state.todos));
  }

  render() {
    return (
      <Container>
        <Content>
          <Header>
            <Body>
              <Title>React-Native Todo App</Title>
            </Body>
          </Header>
          <Textbox 
          handleChange={this.handleChange} 
          value={this.state.value}
          />
          <Button block primary
            style={styles.button}
            onPress={() => this.handleSubmit()}
          >
            <Text style={styles.btnText}>Add</Text>
          </Button>
          <TodoList
            handleDelete={this.handleDelete}
            handleClearList={this.handleClearList}
            todos={this.state.todos}
          />
        </Content>
      </Container>
    );
  }
};

const styles = StyleSheet.create({
  button: {
    margin: 15,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  }
});