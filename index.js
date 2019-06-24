// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);



// import a library to hel create a component

import React from 'react'
import ReactNative from 'react-native'




// create a component

const App = () => {
    return (
        <Text>Some Text</Text>
    )
}

// render it to the device
//note: for every react app we make we musts register one component

ReactNative.AppRegistry.registerComponent('albums', () => App)