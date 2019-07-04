//Import libraries to help create component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from  './src/components/AlbumList';

//Create component
const App = () => {
    return ( 
        <View>
            <Header headerText={'Albums'} />
            <AlbumList />
        </View>
    );
};

//Render component
AppRegistry.registerComponent('albums', () => App);