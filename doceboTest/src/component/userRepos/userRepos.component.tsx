import React, {useState} from "react";
import {Text, FlatList, ListRenderItemInfo, View} from "react-native";
import {GitHubUserRepo} from "model/gitApi.model";
import {ListItem, Button} from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
import {OrderBy, SortBy} from "http-client/git.service";
import styles from "./userRepos.style";

interface UserReposComponentProps {
    userRepos: GitHubUserRepo[],
    username: string,
    fetchRepo: (username: string, sortBy?: SortBy, orderBy?: OrderBy) => void;
}

enum SORT {
    CREATED = 'Created',
    UPDATED = 'Updated',
    NAME = 'Name'
}

enum ORDER{
    ASC = 'Asc',
    DESC = 'Desc'
}

const UserReposComponent = (props: UserReposComponentProps) => {
    const [selectedSort, setSort] = useState<SORT>(SORT.NAME);
    const [selectedOrder, setOrder] = useState<ORDER>(ORDER.ASC);

    const mappingEnumOrderWithType = (order: ORDER): OrderBy => {
        if(order === ORDER.DESC){
            return 'desc';
        }
        return 'asc';
    };

    const mappingEnumSortWithType = (sort: SORT): SortBy => {
        if(sort === SORT.NAME){
            return 'full_name';
        }
        if(sort === SORT.UPDATED){
            return 'updated';
        }
        return 'created';
    };

    const renderItem = (info: ListRenderItemInfo<GitHubUserRepo>) => {
        return(
            <ListItem
                title={info.item.name}
                subtitle={'star count: '+info.item.stargazers_count}
                bottomDivider
            />
        )
    };

    const keyExtractor = (item: GitHubUserRepo) => item.id.toString();

    const renderSortButton = (title: SORT) => {
        return (
            <Button
                title={title}
                type="clear"
                onPress={() => {
                    setSort(title);
                    props.fetchRepo(props.username,mappingEnumSortWithType(title),mappingEnumOrderWithType(selectedOrder))
                }}
                titleStyle={[
                    styles.titleButton,
                    selectedSort === title ? {color: 'orange'} : {}
                ]}
                icon={

                    <Icon
                        name="check-circle"
                        size={15}
                        color={selectedSort === title ? 'orange' : 'transparent'}
                    />
                }
            />
        )
    };

    const renderSortButtons = () => {
        return(
            <View style={styles.buttonsContainer}>
                <Text style={styles.label}>{'Sort by'}</Text>
                {renderSortButton(SORT.CREATED)}
                {renderSortButton(SORT.UPDATED)}
                {renderSortButton(SORT.NAME)}
            </View>
        )
    };

    const renderOrderButton = (title: ORDER) => {
        return (
            <Button
                title={title}
                type="clear"
                onPress={() => {
                    setOrder(title);
                    props.fetchRepo(props.username,mappingEnumSortWithType(selectedSort),mappingEnumOrderWithType(title))
                }}
                titleStyle={[
                    styles.titleButton,
                    selectedOrder === title ? {color: 'orange'} : {}
                ]}
                icon={

                    <Icon
                        name="check-circle"
                        size={15}
                        color={selectedOrder === title ? 'orange' : 'transparent'}
                    />
                }
            />
        )
    };

    const renderOrderButtons = () => {
        return(
            <View style={styles.buttonsContainer}>
                <Text style={styles.label}>{'Order by'}</Text>
                {renderOrderButton(ORDER.ASC)}
                {renderOrderButton(ORDER.DESC)}
            </View>
        )
    };

    return (
        <>
            {renderSortButtons()}
            {renderOrderButtons()}
            <FlatList data={props.userRepos}
                      keyExtractor={keyExtractor}
                      renderItem={renderItem}/>
        </>
    )
};

export default UserReposComponent
