import { Text, View} from 'react-native';
import GlobalStyle from './GlobalStyle';

 export default function Task(props){
    return(
        <View>
            <View style={GlobalStyle.items}>
                <View style={GlobalStyle.itemsLeft}>
                    <View style={GlobalStyle.square}></View>
                    <Text style={GlobalStyle.itemsText}> {props.text}</Text>
                    <View style={GlobalStyle.circular}></View>
                </View>
            </View>
        </View>
    );
}
