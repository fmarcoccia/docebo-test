import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    loaderContainer: {
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        zIndex: 9999,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    }
});

export default styles
