import React, {
    Component,
} from 'react';

import {
    View, Text, TouchableHighlight
} from 'react-native';

import styles from './page.style';

class Main extends Component {

     static navigationOptions = {
         title : 'Main',
     }

     render(){

          return (
              <View style = {styles.container}>
              </View>
          );

     }

}

export default Main;