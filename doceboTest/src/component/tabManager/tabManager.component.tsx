import TabComponent, {TabName} from 'component/tab/tab.component';
import React, {useState} from 'react';
import UserProfileContainer from 'component/userProfile/userProfile.container';
import UserReposContainer from 'component/userRepos/userRepos.container';

/**
 * This component manage the interaction of TabComponent - Render the right component
 * @constructor
 */
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
