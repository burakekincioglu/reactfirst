/**
 * @format
 */
 import React from 'react';
import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
import Header from './src/components/Header';
//

const App = () => (
    <Header headerText={'Ornek Proje'}/>
);


//export default App; // App uygulamasının ucu nerde? en son çağırılma yeri neresi ??
AppRegistry.registerComponent(appName, () => App);
