import {
    Linking,
    Text, TouchableOpacity,
    View,
} from 'react-native';
import * as React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {GitHubUserInfo} from 'model/gitApi.model';
import { Avatar } from 'react-native-elements';
import { Icon } from 'react-native-elements'
import styles from "./userProfile.style";

interface UserProps extends StackNavigationProp<any,any>{
    user: GitHubUserInfo,
}

const UserComponent = (props: UserProps) => {

    const printItem = (key: string, attribute: string, isLink: boolean) => {
        if(attribute && !isLink){
            return(
                <View style={styles.itemContainer}>
                    <Text style={styles.item}>
                        {key+': '}
                    </Text>
                    <Text numberOfLines={1}>
                        {attribute}
                    </Text>
                </View>
            )
        } else if(attribute && isLink){
            return (
                <TouchableOpacity
                    style={styles.linkItemContainer}
                    onPress={() => {Linking.openURL(attribute)}}>
                    <Text style={styles.linkItem}>
                        {key+': '}
                    </Text>
                    <Text numberOfLines={1} style={{paddingRight: 5}}>{attribute}</Text>
                    <Icon
                        size={15}
                        name='open-in-new'
                        type={'material'}
                        color='black'
                    />
                </TouchableOpacity>
            )
        }
        return null
    };

    return (
        <View style={styles.main}>
            <View style={styles.row}>
                <Avatar
                    size={'large'}
                    rounded
                    source={{
                        uri: props.user.avatar_url,
                    }}
                />
                <View style={styles.itemsContainer}>
                    {printItem('Name', props.user.name, false)}
                    {printItem('Email', props.user.email, false)}
                    {printItem('Profile URL', props.user.html_url, true)}
                    {printItem('Location', props.user.location, false)}
                </View>
            </View>
        </View>
    );
};
export default UserComponent;
