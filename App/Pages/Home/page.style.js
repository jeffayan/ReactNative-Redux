import {
    StyleSheet, Dimensions
} from 'react-native';


const contentHorzontalMargin = 10

const sideArea = Dimensions.get('screen').width-(contentHorzontalMargin*2)

export default StyleSheet.create({

    container : {
        flex : 1,
        backgroundColor : '#191919',
        paddingHorizontal : contentHorzontalMargin,
    }, 
    listCell : {
        width : sideArea/2-20,
        height : sideArea/2-20,
        backgroundColor : 'white',
        margin : 10,
    },
    imageView : {
        resizeMode : 'contain',
        width : '100%',
        height : '100%',
    },
    bottomView : {
       width : '100%',
       height : '20%',
       bottom : 0,
       position : 'absolute',
       backgroundColor : 'black',
       opacity : 0.7,
       justifyContent : 'center'
    },
    bottomViewText : {
        color : 'white',
        fontSize : 14,
        fontWeight : '500',
        textAlign : 'left',
        marginLeft : 10,
    } 

});