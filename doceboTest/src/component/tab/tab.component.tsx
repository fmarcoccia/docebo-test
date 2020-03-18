import {ButtonGroup} from 'react-native-elements';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './tab.style';

export enum TabName {
    PROFILE = 'PROFILE',
    REPOSITORIES = 'REPOSITORIES'
}

interface TabComponentProps {
    onChangeTab: (tabName: TabName) => void
}

/**
 * This component render a predefenite tabs component: Profile and Repositories relatives to a specific github user
 * @param props
 * @constructor
 */

const TabComponent = (props: TabComponentProps) => {
    const buttons = [TabName.PROFILE, TabName.REPOSITORIES];
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        props.onChangeTab(buttons[selectedIndex])
    },[selectedIndex]);

    return(
        <ButtonGroup
            onPress={(index: number) => {
                setSelectedIndex(index)
            }}
            Component={TouchableOpacity}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={styles.container}
            buttonStyle={styles.tab}
            textStyle={styles.text}
            selectedTextStyle={styles.text}
            selectedButtonStyle={styles.selectedTab}
        />
    )
};
export default TabComponent
