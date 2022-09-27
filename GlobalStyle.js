import {StyleSheet} from 'react-native';


const GlobalStyle = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#E8EAED',
    },

    wrapper:{
        paddingTop:80,
        paddingHorizontal:20,
        alignContent:'center',
    },

    sectionTitle: {
        fontWeight:'bold',
        fontSize: 24,
        marginLeft:30,
        textAlign:'center',
    },

    items:{
        backgroundColor:'white',
        boderRaduis:10,
        padding:15,
        marginHorizontal:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:20,
    },

    square:{
        width:24,
        height:24,
        backgroundColor:'#558CF6',
        opacity:0.4,
        borderRadius:5,
        marginRight:15
    },

    itemsLeft:{

        flexDirection:'row',
        alignItems: 'center',
        flexWrap:'wrap',
    },

    itemsText:{
        maxWidth:'80%',
    },

    circular:{
        marginLeft:150,
        width:12,
        height:12,
        borderColor:'#558CF6',
        borderWidth:2,
        borderRadius:5,

    }
});

export default GlobalStyle;