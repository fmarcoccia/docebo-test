import {ActivityIndicator, View} from 'react-native';
import React from 'react';
import styles from "./loader.style";

interface LoaderComponentProps {
    isLoading: boolean
}
const LoaderComponent = (props: LoaderComponentProps) => {
    return(
        props.isLoading ?
            (<View style={styles.loaderContainer}>
                <ActivityIndicator
                    size={'large'}
                    color={'black'}
                    animating={props.isLoading} />
            </View>) : null


    )
};

export default LoaderComponent
