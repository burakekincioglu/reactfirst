/**
 * @format
 */
import React from 'react';
import {AppRegistry, View} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
import Header from './src/components/Header';
import Liste from './src/components/Liste';

const App = () => (
    <View style={{ flex: 1 }}>
        <Header headerText={'Ornek Proje'}/>
        <Liste />
    </View>
);


// App uygulamasının en son çağırılma yeri
AppRegistry.registerComponent(appName, () => App);
