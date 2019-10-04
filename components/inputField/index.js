import React from 'react';
import {
    Form,
    Item,
    Input,
    Label
} from 'native-base';
import { View } from 'react-native';

export default class Textbox extends React.Component {
    render() {
        const { handleChange, value } = this.props;
        return (
            <View>
                <Form>
                    <Item floatingLabel>
                        <Label>Add A Todo Item</Label>
                        <Input value={value} onChangeText={(text) => handleChange(text)} />
                    </Item>
                </Form>
            </View>
        );
    }
}
