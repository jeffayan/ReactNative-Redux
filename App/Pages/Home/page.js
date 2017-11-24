import React, {
    Component,
} from 'react';

import {
    View, Text, TouchableHighlight, Button, Image, FlatList
} from 'react-native';

import styles from './page.style';
import stylesGlobal from '../global.style';


const data = [{key : 1, title : 'SPORT', image : require('../../Assets/sports.jpg')},
              {key : 2, title : 'BUSSINESS', image : require('../../Assets/bussiness.jpg')}, 
              {key : 3, title : 'FOOD', image : require('../../Assets/food.jpg')},
              {key : 4, title : 'DESIGN', image : require('../../Assets/design.jpg')},
              {key : 5, title : 'LIFE STYLE', image : require('../../Assets/lifeStyle.jpg')},
              {key : 6, title : 'TECHNOLOGY', image : require('../../Assets/technology.jpeg')}, ]


class Home extends Component {
    static navigationOptions = (navigation)=> {
        console.log("Navigation",navigation.navigation.state);
        const {state} = navigation.navigation;
       return {
        title : state.routeName,
        headerLeft :  (
            <TouchableHighlight 
            underlayColor = {'transparent'}
            style = {stylesGlobal.sideBarButton}
            onPress = {() => state.params.sideBarAction && state.params.sideBarAction()}>
                  <Image source = {require('../../Assets/menu-4-16.png')}/>     
            </TouchableHighlight>
        ),
        headerRight :  (
            <TouchableHighlight 
            underlayColor = {'transparent'}
            style = {stylesGlobal.sideBarButton}
            >
                  <Image source = {require('../../Assets/search-13-16.png')}/>     
            </TouchableHighlight>
        ),
        headerStyle : stylesGlobal.headerStyle,
        headerTintColor : 'white',
       }
    }

     render(){
        
          return (
              <View style = {styles.container}>
                   <FlatList numColumns = {2} style = {{marginTop : 10}} contentContainerStyle = {{justifyContent : "center"}}
                       data= {data} //{[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}]}
                       renderItem = {({item})=> <ItemCell title = {item.title} image = {item.image}/>}
                   />
                   
              </View>
          );

     }

}

class ItemCell extends Component {

    render(){
        return(
            <View style = {styles.listCell}>
                <Image source = {this.props.image} style = {styles.imageView}/>
                <View style = {styles.bottomView}>
                 <Text style = {styles.bottomViewText}>{this.props.title}</Text>
                </View>
            </View>    
        );
    }

}


export default Home;