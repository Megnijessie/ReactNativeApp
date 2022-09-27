import { Text, View, TouchableOpacity } from 'react-native';
import GlobalStyle from '../GlobalStyle';
// import GlobalStyle from "../GlobalStyle";

 export default function Task(){
    return(
        <View>
            <View style={GlobalStyle.items}>
                <View style={GlobalStyle.itemsLeft}>
                    <View style={GlobalStyle.square}></View>
                    <Text style={GlobalStyle.itemsText}> This is a task</Text>
                    <View style={GlobalStyle.circular}></View>
                </View>
            </View>
        </View>
    );
}
