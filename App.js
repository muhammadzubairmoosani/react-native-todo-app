import React from 'react';
import {
  Container,
  Button,
  Header,
  Body,
  Title,
  Content
} from 'native-base';

import Textbox from './components/inputField';
import TodoList from './components/todoList';
import { Text, StyleSheet, View } from 'react-native';
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
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange = text => this.setState({ value: text });

  addToDatabase = todos => firebase.database().ref('todos').set({ value: todos });

  handleDelete(index) {
    let arr = this.state.todos;
    arr.splice(index, 1);
    this.setState({ todos: arr },
      () => this.addToDatabase(this.state.todos));
  }

  handleSubmit() {
    let arr = [];
    arr.push(this.state.value);
    this.setState({ todos: this.state.todos.concat(arr) },
      () => this.addToDatabase(this.state.todos));
  }

  render() {
    return (
      <View>
        <Content>
          <Header>
            <Body>
              <Title>React Todo App</Title>
            </Body>
          </Header>
          <Textbox handleChange={this.handleChange} />
          <Button block primary
            style={styles.Button}
            onPress={() => this.handleSubmit()}
          >
            <Text style={styles.btnText}>Add</Text>
          </Button>
          <TodoList handleDelete={this.handleDelete} />
        </Content>
        {/* <Button block primary>
          <Text>Clear List</Text>
        </Button> */}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  Button: {
    margin: 15,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  }
});