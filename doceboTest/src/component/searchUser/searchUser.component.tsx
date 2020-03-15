import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  Platform,
  View,
} from 'react-native';
import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
import {colors, ListItem, SearchBar} from 'react-native-elements';
import {StackNavigationProp} from "@react-navigation/stack";
import {IRequestGetUsers} from "model/gitApi.model";

interface SearchUserProps extends StackNavigationProp<any,any>{

}

const SearchUserComponent = (props: any) => {
  let flatListRef: FlatList;
  const [params, setParams] = useState<IRequestGetUsers>({
    searchString: '',
    pageableRequest:{
      page: 0,
      per_page: 100
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

  const renderItem = (info: ListRenderItemInfo<any>) => {
    return (
        <ListItem
            title={info.item.login}
            leftAvatar={{source: {uri: info.item.avatar_url}}}
            bottomDivider
            chevron
        />
    );
  };

  const keyExtractor = (item: any) => {
    return item.id.toString();
  };

  const handleLoadMore = () => {
    if(props.totalNumber > props.users.length){
      setParams((prevState) => {
        return{
          ...prevState,
          pageableRequest:{
            page: prevState.pageableRequest.page + 1,
            per_page: 100
          }
        }
      })
    }
    return;
  };

  const renderFooter = () => {
    if (!props.isLoading) return null;

    return (
        <View
            style={{
              width: '100%',
              height: 50,
              position: 'absolute',
            }}
        >
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
                  per_page: 100,
                  page: 1
                }
              });
            }}
        />
        <FlatList
            contentContainerStyle={{
              paddingBottom: 55
            }}
            data={props.users}
            ref={(ref: FlatList) => flatListRef = ref}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            onEndReached={handleLoadMore}
            ListFooterComponent={renderFooter}
            onEndReachedThreshold={0.5}
            initialNumToRender={100}
        />
      </>
  );
};
export default SearchUserComponent;
