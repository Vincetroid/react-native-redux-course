//Import libraries to create a component
import React from 'react';
import { View, Text } from 'react-native';

//Create component
const Header = (props) => {
    const { textStyles, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyles}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 10,
        position: 'relative',
    },
    textStyles: {
        fontSize: 20,
    }
};

//Render component
export default Header;
