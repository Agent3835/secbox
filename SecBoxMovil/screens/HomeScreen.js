import React from 'react';
import {View , Text , Button, StyleSheet, TouchableOpacity} from 'react-native';
// importar use navigation
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';

const HomeScreen = () => {

    // instanciar use navigation
    const navigation = useNavigation();

    return (
        <View>
            <Text
                style={{
                    fontSize: 30,
                    textAlign: 'center',
                    marginTop: 300
                }}
            > Home Screen </Text>
            <TouchableOpacity 
            onPress={() => navigation.navigate('Products')} // navegar a la pantalla Stack
                style={{
                    backgroundColor: '#478CCF',
                    padding: 10,
                    marginTop: 10,
                    width: "50%",
                    alignSelf: 'center',
                    borderRadius: 10
                }}
            >  
            <Text style= {{
                color: 'white',
                textAlign: 'center'
            }} 
            > See Product</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeScreen;