import React from 'react';
import MapScreen from '../MapScreen';
import {renderForTest} from '../../testUtils';

let location = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.015,
  longitudeDelta: 0.0121,
};
describe('MapScreen Screen', () => {
  it('Map screen should render correctly', () => {
    const mapScreen = renderForTest(<MapScreen location={location} />).toJSON();
    expect(mapScreen).toMatchSnapshot();
  });
});
