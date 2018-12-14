import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from './colors'

let dim = Dimensions.get('window')

export const historyStyle = StyleSheet.create({
    container:{
        flex: 1,
    },
    title: {
        fontSize: 18,
        color: Colors.darkBlue
    },
    grade: {
        height:80,
        width: 120
    },
    imgProduct: {
        height: dim.width*0.2,
        width: dim.width*0.2
    },
    row: {
        flexDirection: 'row'
    },
    item: {
        marginTop: 3,
        marginLeft: 8
    }
});