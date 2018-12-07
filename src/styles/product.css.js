import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from './colors'

let dim = Dimensions.get('window')

export const productStyle = StyleSheet.create({
    container:{
        flex: 1,
    },
    title: {
        fontSize: 24,
        color: Colors.darkBlue
    },
    subTitle: {
        fontSize: 16,
        color: Colors.blue
    },
    grade: {
        height:90,
        width: 140
    },
    info: {
        fontSize: 14,
        backgroundColor: Colors.tulip,
        color: "#FFFFFF",
        textAlign: "center",
        padding: 4,
        marginTop: 10,
    },
    imgProduct: {
        height: dim.width*0.4,
        width: dim.width*0.4
    },
    bold: {
        fontWeight: 'bold',
        marginTop: 8
    },
    infoWrap: {
        width: dim.width*0.5
    },
    row: {
        flexDirection: 'row'
    }
});