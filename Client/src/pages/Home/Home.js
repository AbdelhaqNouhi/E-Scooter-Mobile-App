import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapboxGL from '@rnmapbox/maps';

MapboxGL.setAccessToken('<pk.eyJ1IjoiYW5vdWhpIiwiYSI6ImNsZWJoeHJyODA4Z3kzbnJ4amZnaWV0NWEifQ.qeqMavoHxDNOHPfhrSCECg>');

const Home = () => {
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <MapboxGL.MapView style={styles.map} />
            </View>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        height: 300,
        width: 300,
    },
    map: {
        flex: 1
    }
});