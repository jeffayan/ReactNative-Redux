import React, {
    Component,
} from 'react';

import {
    View, Text, TouchableHighlight, Button
} from 'react-native';

import styles from './page.style';

class Home extends Component {


    static navigationOptions = (navigation)=> {
        console.log("Navigation",navigation.navigation.state);
        const {state} = navigation.navigation;
       return {
        title : state.routeName,
        headerLeft :  (
            <Button
            title = "Test"
            onPress = {() => params.sideBarAction && params.sideBarAction()}/>
          ),
       }
    }

     render(){
        
          return (
              <View style = {styles.container}>
              </View>
          );

     }

}

export default Home;