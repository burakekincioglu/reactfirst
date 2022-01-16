import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios'


//servislere bağlanabilmek için class haline getireceğiz
class Liste extends Component {
    componentWillMount() {
        console.log('componentWillMount');
        axios.get('https://reqres.in/api/users')
        .then(response => console.log(response));
    }
    componentDidMount() {
        console.log('componentDidMount');
    }

    render() {
        console.log('render');
        return (
            <View style={{marginTop: 5}}>
            <Text> Example Project List</Text>
            </View>
        );
    }
}

export default Liste;