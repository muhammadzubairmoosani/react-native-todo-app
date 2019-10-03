import React from 'react';
import { Container, Header, Body, Button, Content, Title, Item, Input } from 'native-base';
import { Text, StyleSheet } from 'react-native';

export default class Textbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    changeHandle = (e) => this.setState({ value: e.target.value })
    render() {
        console.warn(this.state.value)
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>React Todo App</Title>
                    </Body>
                </Header>
                <Content>
                    <Item style={styles.input}>
                        <Input placeholder="Enter Todo Here..." onChange={(e) => this.changeHandle(e)} />
                    </Item>
                    <Button style={styles.Button} block primary>
                        <Text style={styles.btnText}>Add</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    Button: {
        margin: 15,
    },
    input: {
        marginTop: 15,
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    }
});