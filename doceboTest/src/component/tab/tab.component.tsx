import {ButtonGroup} from "react-native-elements";
import React, {useState} from "react";
import {TouchableOpacity} from "react-native";
import styles from "./tab.style";

const TabComponent = () => {
    const buttons = ['Profile', 'Repositories'];
    const [selectedIndex, setSelectedIndex] = useState(0);

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
