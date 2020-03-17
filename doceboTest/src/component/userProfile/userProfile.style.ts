import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    main:{
        margin: 20,
        width: 120
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemsContainer:{
        paddingLeft: 20,
        justifyContent: 'center'
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    item:{
        fontWeight: 'bold',
        paddingVertical: 5
    },
    linkItemContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5
    },
    linkItem:{
        fontWeight: 'bold',
        paddingVertical: 5
    }
});

export default styles
