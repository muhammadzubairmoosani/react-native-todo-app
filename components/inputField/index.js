import React from 'react';
import {
    Form,
    Item,
    Input,
    Label,
    Button,
    Text
} from 'native-base';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Middleware from '../../store/middleware/middleware'
class Textbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    handleChange = text => this.setState({ value: text });

    handleSubmit() {
        this.props.sendData(this.state.value);
        this.setState({ value: '' })
    }

    render() {
        return (
            <View>
                <Form>
                    <Item floatingLabel>
                        <Label>Add A Todo Item</Label>
                        <Input value={this.state.value} onChangeText={(text) => this.handleChange(text)} />
                    </Item>
                </Form>
                <Button block primary
                    style={styles.button}
                    onPress={() => this.handleSubmit()}
                >
                    <Text style={styles.btnText}>Add</Text>
                </Button>
            </View >
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        sendData: (data) => dispatch(Middleware.addToDatabase(data))
    }
}

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

export default connect(null, mapDispatchToProps)(Textbox)