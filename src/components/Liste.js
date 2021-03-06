import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import Detay from './Detay';


//servislere bağlanabilmek için class haline getireceğiz 
class Liste extends React.Component {
    state = {data: [] };
    UNSAFE_componentWillMount() {  // neden bu request işini metod içinde yaptı ??
        console.log('Data request edildi.');
        axios.get('https://reqres.in/api/users')
        .then(response => { 
            this.setState({ data: response.data.data})});
    }
    // componentDidMount() {
    //     console.log('componentDidMount');
    // }

    renderData() {
        return this.state.data.map( (responseData, id) => // Id'i nereden alıyor burada? 
            <Detay key={id} data={responseData}>  </Detay>    
    );
    }

    render() {
        console.log('gelen data', this.state);
        console.log('render');
        return (
            <ScrollView style={{marginTop: 5}}>
                {this.renderData()}
            </ScrollView>
        );
    }
}

export default Liste;