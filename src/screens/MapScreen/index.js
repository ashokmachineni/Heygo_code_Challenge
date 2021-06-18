import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import LocationDetails from './widget/LocationDetails';
import Map from './widget/Map';

const MapScreen = () => {
  const locationData = useSelector(({locationData}) => locationData);
  return (
    <SafeAreaView style={styles.container}>
      <Map location={locationData} />
      <LocationDetails location={locationData} />
    </SafeAreaView>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
