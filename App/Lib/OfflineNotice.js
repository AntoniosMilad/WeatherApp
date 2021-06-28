import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, Dimensions } from 'react-native';
import Colors from '../Themes/Colors';
import NetInfo from '@react-native-community/netinfo';
const { width } = Dimensions.get('window');

function MiniOfflineSign() {
    return (
        <View style={styles.offlineContainer}>
            <Text style={styles.offlineText}>No Internet Connection ...</Text>
        </View>
    );
}

export default class OfflineNotice extends Component {
    constructor(props) {
        super(props)
        this.unsubscribe = null
    }
    state = {
        connection_Status: "",
        isConnected: true
    }

    componentDidMount() {
        this.unsubscribe = NetInfo.addEventListener(this.handleConnectivityChange);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    handleConnectivityChange = state => {
        if (state.isConnected) {
            this.setState({ connection_Status: true });
        }
        else {
            this.setState({ connection_Status: false });
        }
    };

    render() {
        if (!this.state.connection_Status) {
            return <MiniOfflineSign />;
        }
        return null;
    }
}

const styles = StyleSheet.create({
    offlineContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width,
        position: 'absolute',
        top: 0
    },
    offlineText: {
        color: '#E11C23',
        fontSize: 12,
    },
});
