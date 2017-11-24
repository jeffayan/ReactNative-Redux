import React, {
    Component,
} from 'react';

import {
    View, Text, TouchableHighlight
} from 'react-native';

import styles from './page.style';

import {SideBar, Main, Home} from '../../Pages';

import SideMenu from 'react-native-side-menu';

import {StackNavigator} from 'react-navigation';

class Landing extends Component {

    constructor(props) {
        super(props)
        this.state = {
           sideBarIsOpen : false,
        }
        this.toggle = this.toggle.bind(this);
      }
  
    toggle(){
        console.log("Toggle ");
        this.setState({
            sideBarIsOpen : !this.state.sideBarIsOpen,
        });
    }   

    render(){

       const Navigator = StackNavigator({
           Main : {
               screen : Main,
           },
           Home : {
               screen : Home,
           }
         },{
             initialRouteName : 'Home',
             initialRouteParams : {
                 sideBarAction : this.toggle,
             }
         }
    )



        return(

            <SideMenu
            menu = {<SideBar/>} 
            isOpen = {this.state.sideBarIsOpen} 
            onChange = {isOpen => {
              this.setState({ sideBarIsOpen : isOpen })}
              }>
                 <Navigator/>
             </SideMenu>
        );

    }

}

export default Landing;