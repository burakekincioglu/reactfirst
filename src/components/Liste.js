import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios'


//servislere bağlanabilmek için class haline getireceğiz 
class Liste extends React.Component {
    state = {data: [] };
    UNSAFE_componentWillMount() {
        console.log('componentWillMount');
        axios.get('https://reqres.in/api/users')
        .then(response => { 
            this.setState({ data: response.data.data})});
    }
    componentDidMount() {
        console.log('componentDidMount');
    }

    renderData() {
        return this.state.data.map( responseData => 
            <Text> {responseData.first_name} </Text>    
    );
    }

    render() {
        console.log('gelen data', this.state);
        console.log('render');
        return (
            <View style={{marginTop: 5}}>
                {this.renderData()}
            </View>
        );
    }
}

export default Liste;