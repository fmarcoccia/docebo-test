import { StyleSheet } from 'react-native';

const sharedStyle = {
    backgroundColor: 'grey',
    borderBottomWidth: 2,
};

const styles = StyleSheet.create({
    container:{
        height: 50,
        marginHorizontal: 1,
        marginVertical: 0
    },
    text:{
        color: 'white'
    },
    tab: {
        ...sharedStyle,
        borderBottomColor: 'grey'
    },
    selectedTab:{
        ...sharedStyle,
        borderBottomColor: 'orange'
    }
});

export default styles
