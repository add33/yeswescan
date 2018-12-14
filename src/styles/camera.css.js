import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from './colors'

let dim = Dimensions.get('window')

export const cameraStyle = StyleSheet.create({
    cameraWrap: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'stretch'
    },
    camera: {
        flex: 1
    },
    preview:{
        position: 'absolute',
        height: 200,
        width: dim.width*0.8,
        left: dim.width*0.1,
        bottom: 40,
        backgroundColor: Colors.lemon
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