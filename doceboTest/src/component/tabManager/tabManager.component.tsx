import TabComponent, {TabName} from "../tab/tab.component";
import React, {useState} from "react";
import UserProfileContainer from 'component/userProfile/userProfile.container';
import UserReposContainer from "component/userRepos/userRepos.container";

const TabManagerComponent = () => {
    const [screenToView, setScreenToView] = useState<TabName>();

    return(
        <>
        <TabComponent onChangeTab={(tabName: TabName) => {
            setScreenToView(tabName)
        }}/>
            {
                screenToView === TabName.PROFILE ?
                    (<UserProfileContainer/>) : <UserReposContainer/>
            }
        </>
    )
};

export default TabManagerComponent
