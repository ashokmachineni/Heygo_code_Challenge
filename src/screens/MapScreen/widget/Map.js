import MapView, {Marker} from 'react-native-maps';
import React, {useMemo} from 'react';

const Map = ({location}) => {
  const {latitude, longitude, name} = location;
  const locationRegion = useMemo(() => {
    return {
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
  }, [location]);
  return (
    <MapView style={{flex: 2}} initialRegion={locationRegion}>
      <Marker
        coordinate={{latitude: latitude, longitude: longitude}}
        title={name}
      />
    </MapView>
  );
};

export default Map;
