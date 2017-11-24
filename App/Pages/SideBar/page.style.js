import {
    StyleSheet, Dimensions
} from 'react-native';

export default StyleSheet.create({

    container : {
        flex : 1,
        backgroundColor : '#121212',
    },
    avatar : {
        alignSelf : 'center',
        marginTop : 20,
    },
    sideBarCellView : {
        width : '100%',
        height : 70,
        backgroundColor : 'transparent',
        marginVertical : 30,
        marginHorizontal : 50,
        justifyContent : 'center',
    },
    sideBarCellText : {
        flex : 1,
        fontSize : 20,
        fontWeight : '500',
        fontFamily : 'Roboto',       
    },
    sideBarCellUnderLine : {
        backgroundColor : '#2e2e2e',
        width : Dimensions.get('window').width-100,
        height : 2,
        bottom : 0,
    }

});