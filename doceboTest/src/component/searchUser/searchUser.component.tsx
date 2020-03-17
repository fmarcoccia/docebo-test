import {
    ActivityIndicator,
    FlatList,
    ListRenderItemInfo,
    Platform,
    View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ListItem, SearchBar} from 'react-native-elements';
import {StackNavigationProp} from '@react-navigation/stack';
import {GitHubUser, IRequestGetUsers} from 'model/gitApi.model';
import styles from './searchUser.style';

export type SearchUserScreenNavigationProp = StackNavigationProp<any, any>;

interface SearchUserProps{
    users: GitHubUser[],
    totalNumber: number,
    isLoading: boolean,
    getUsers: (input: IRequestGetUsers) => void;
    fetchUser: (navigation: any, username: string) => void;
    navigation: SearchUserScreenNavigationProp;
}

const SearchUserComponent = (props: SearchUserProps) => {
    let flatListRef: FlatList;
    const [params, setParams] = useState<IRequestGetUsers>({
        searchString: '',
        pageableRequest:{
            page: 0,
            per_page: 50
        }
    });

    useEffect(() => {
        if (params && params.searchString && params.searchString.length > 0) {
            setTimeout(() => {
                if(flatListRef && params.pageableRequest.page === 1){
                    flatListRef.scrollToOffset({ animated: true, offset: 0 });
                }
                props.getUsers(params);
            }, 150);
        }
    }, [params]);

    const renderItem = (info: ListRenderItemInfo<GitHubUser>) => {
        return (
            <ListItem
                onPress={() => {
                    props.fetchUser( props.navigation, info.item.login)
                }}
                title={info.item.login}
                leftAvatar={{
                    source: {
                        uri: info.item.avatar_url,
                        cache: 'force-cache'
                    },
                    title: info.item.login[0]
                }}
                bottomDivider
                chevron
            />
        );
    };

    const keyExtractor = (item: GitHubUser, index: number) => {
        return index.toString();
    };

    const handleLoadMore = () => {
        if(props.totalNumber > props.users.length){
            setParams((prevState) => {
                return{
                    ...prevState,
                    pageableRequest:{
                        page: prevState.pageableRequest.page + 1,
                        per_page: 50
                    }
                }
            })
        }
        return;
    };

    const renderFooter = () => {
        if (!props.isLoading) return null;

        return (
            <View style={styles.activityIndicator}>
                <ActivityIndicator animating size="large" />
            </View>
        );
    };

    return (
        <>
            <SearchBar
                placeholder={'Type to search user...'}
                platform={Platform.OS === 'android' ? 'android' : 'ios'}
                value={params.searchString}
                showLoading={props.isLoading}
                onChange={e => {
                    setParams({
                        searchString: e.nativeEvent.text,
                        pageableRequest: {
                            per_page: 50,
                            page: 1
                        }
                    });
                }}
            />
            <FlatList
                contentContainerStyle={styles.listContainer}
                data={props.users}
                ref={(ref: FlatList) => flatListRef = ref}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                onEndReached={handleLoadMore}
                ListFooterComponent={renderFooter}
                onEndReachedThreshold={0.5}
                initialNumToRender={25}
                maxToRenderPerBatch={50}
            />
        </>
    );
};
export default SearchUserComponent;
