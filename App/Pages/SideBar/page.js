import React, {
    Component,
} from 'react';

import {
    View, Text, TouchableHighlight, StyleSheet
} from 'react-native';

import styles from './page.style';

import {Avatar}  from 'react-native-elements'

class SideBar extends Component {

    render() {

        return (
            <View style={styles.container}>
                <Avatar 
                    containerStyle = {styles.avatar}
                    xlarge
                    rounded
                    source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" }}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                />
                <View style = {StyleSheet.flatten([styles.sideBarCellUnderLine,{marginTop : 20}])}></View>
                <SideBarCell title='HOME' selected={true} />
                <SideBarCell title='MAIN' selected={false} />
                <SideBarCell title='PROFILE' selected={false} />
            </View>
        );

    }

}

class SideBarCell extends Component {
    render() {
        return (
            <View style={styles.sideBarCellView}>
                <Text style={StyleSheet.flatten([styles.sideBarCellText, { color: this.props.selected ? '#ffffff' : '#8b8b8b' }])}> {this.props.title}</Text>
                <View style={styles.sideBarCellUnderLine}></View>
            </View>
        );
    }
}

export default SideBar;