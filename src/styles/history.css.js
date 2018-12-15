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
        height: 80,
        width: 80
    },
    row: {
        flexDirection: 'row'
    },
    item: {
        height: 80,
        paddingTop: 3,
        paddingLeft: 8,
        backgroundColor: '#fff'
    },
    btnSupp: {
        position: 'absolute',
        right: 0,
        height: 80,
        width: 110,
        backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnValue: {
        fontSize: 16,
        color: '#fff'
    }
});