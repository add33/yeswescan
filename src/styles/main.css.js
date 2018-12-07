import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from './colors'

let dim = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light,
        alignItems: "center"
    },
    logo: {
        height: (831 / 1200) * (dim.width * 0.8),
        width: dim.width * 0.8
    }
});