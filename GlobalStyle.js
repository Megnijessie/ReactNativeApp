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

    },


    writeTaskWrapper:{
        position:"absolute",
        bottom:60,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around',
        alignCItems:'center',
    },

    input:{
        paddingVertical:15,
        paddingHorizontal:15,
        width:250,
        backgroundColor:'white',
        borderRadius:60,
        borderColor:'#C0C0C0',
        borderWidth:1,
    },

    addWrapper:{
        width:60,
        height:60,
        backgroundColor:'white',
        borderRadius:60,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#C0C0C0',
        borderWidth:1,
    },

});

export default GlobalStyle;