import TabComponent, {TabName} from "../tab/tab.component";
import React, {useState} from "react";
import UserProfileContainer from 'component/userProfile/userProfile.container';
import {Text} from "react-native";

const TabManagerComponent = () => {
    const [screenToView, setScreenToView] = useState<TabName>();

    return(
        <>
        <TabComponent onChangeTab={(tabName: TabName) => {
            setScreenToView(tabName)
        }}/>
            {
                screenToView === TabName.PROFILE ?
                    (<UserProfileContainer/>) : <Text>{'TODO'}</Text>
            }
        </>
    )
};

export default TabManagerComponent
