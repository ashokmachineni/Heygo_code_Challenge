import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const LocationDetails = ({location}) => {
  const {name, latitude, longitude} = location;
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          <Details title={'Name:'} desc={name} />
          <Details title={'Latitude:'} desc={latitude} />
          <Details title={'Longitude:'} desc={longitude} />
        </View>
      </View>
    </ScrollView>
  );
};

export default LocationDetails;

const Details = props => {
  const {title, desc} = props;
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.titleText}>{title}</Text>
      <Text>{desc}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsContainer: {
    padding: 10,
  },
  titleText: {
    fontSize: 18,
  },
});
