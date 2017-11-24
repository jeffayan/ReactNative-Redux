import React, {Component} from 'react'

import {
    View, Text, TouchableHighlight, StyleSheet, ScrollView
} from 'react-native';

import {connect} from 'react-redux';

import {getPeopleFromServer} from './Actions'

class Home extends Component {
   
    constructor(props){
        super(props)
        console.log('Props   ', this.props);        
    }

    render(){
        console.log('render ');
        //console.log(this.props);
        const {isFetching, people} = this.props.people
        return(
            <View style = {styles.container}>
                   <TouchableHighlight underlayColor = "white" style = {styles.button} onPress = {this.props.getPeople}>
                         <Text>Fetch</Text>
                   </TouchableHighlight>
                  {
                      isFetching && <Text>Loading...</Text>
                  }
                  <ScrollView> 
                  {
                      people.length ? (                           
                           people.map((person,index)=>{
                              
                                 return (
                                     <View style = {{margin : 10,height : 50}}key = {index}>
                                          <Text style = {{textAlign : 'left'}}>Name : {person.name}</Text>
                                          <Text style = {{textAlign : 'left'}}>Birth Year : {person.birth_year}</Text>
                                     </View>    
                                 )
                            
                           })
                         ) : null
                  }
                 </ScrollView>

            </View>    
        );
    }

    
}


const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white',
        alignItems : 'center',
    },
    button : {
        width : '80%',
        height : 50,
        alignItems : 'center',
        marginTop : 20,
        backgroundColor : 'red',
        justifyContent : 'center',
    },

});


function mapDispatchToProps(dispatch){
    console.log('mapDispatchToProps ===>> ',dispatch);
    return {
        getPeople : () =>  dispatch(getPeopleFromServer())
    }
}


function mapStateToProps(state) {
    console.log('mapStateToProps ==>>  ',state.People);
    return {
        people : state.People
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);