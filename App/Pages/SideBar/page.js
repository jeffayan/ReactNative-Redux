import React, {
    Component,
} from 'react';

import {
    View, Text, TouchableHighlight
} from 'react-native';

import styles from './page.style';

class SideBar extends Component {

     render(){

          return (
              <View style = {styles.container}>
                   <Text>Home</Text>
                   <Text>Home1</Text>
                   <Text>Home2</Text>
              </View>
          );

     }

}

export default SideBar;