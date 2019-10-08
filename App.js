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

class App extends React.Component {
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
            <TodoList />
          </Content>
        </Container>
      </Provider>
    );
  }
};
export default App;