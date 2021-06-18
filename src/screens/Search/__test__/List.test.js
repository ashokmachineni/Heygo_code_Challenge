import React from 'react';
import List from '../widget/List';
import {renderForTest} from '../../../testUtils';
import {fireEvent} from '@testing-library/react-native';
let itemPress;

const data = [
  {
    id: 11,
    name: 'name',
  },
];
describe('List Component', () => {
  it('List Component should render correctly', () => {
    const list = renderForTest(<List data={data} />).toJSON();
    expect(list).toMatchSnapshot();
  });

  it('render item onPress', () => {
    const list = renderForTest(<List data={data} onPressTitle={() => {}} />);
    itemPress = list.getByLabelText('press');
    fireEvent.press(itemPress);
  });
});
