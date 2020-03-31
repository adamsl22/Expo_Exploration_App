import {StyleSheet, Dimensions} from 'react-native';
const {width: winWidth, height: winHeight} = Dimensions.get('window');

export default StyleSheet.create({
    preview: {
        height: winHeight,
        width: winWidth,
        position: 'absolute',
    }
})