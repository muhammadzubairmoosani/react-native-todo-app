import React from 'react';
import {
  Container,
  Header,
  Body,
  Title,
  Content,
} from 'native-base';
import Textbox from './components/inputField';
import TodoList from './components/todoList';
import store from './store';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { connect } from 'react-redux'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      value: ''
    }
    firebase.database().ref("todos").once('value', data => {
      console.warn(data.val())
      if (data.val()) {
        this.setState({ todos: data.val() })
      }
    })
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClearList = this.handleClearList.bind(this);
  }

  handleClearList = () => this.setState({ todos: [] }, () => this.addToDatabase(this.state.todos))

  handleDelete(index) {
    let arr = this.state.todos;
    arr.splice(index, 1);
    this.setState({ todos: arr },
      () => this.addToDatabase(this.state.todos));
  }
  render() {
    return (
      <Provider store={store}>
        <Container>
          <Content>
            <Header>
              <Body>
                <Title>React-Native Todo App</Title>
              </Body>
            </Header>
            <Textbox />
            <TodoList
              handleDelete={this.handleDelete}
              // handleClearList={this.handleClearList}
              // todos={this.state.todos}
            />
          </Content>
        </Container>
      </Provider>
    );
  }
};

// const mapDispatchToProps = dispatch => {
//   return {
//     addToDatabase: data => dispatch({ type: 'SEND_TO_DATABASE', payload: data })
//   }
// }
export default App;