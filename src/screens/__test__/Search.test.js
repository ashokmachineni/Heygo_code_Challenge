import React from 'react';
import Search from '../Search';
import {renderForTest} from '../../testUtils';
import {fireEvent} from '@testing-library/react-native';
let field;
let list;
let onPress;
describe('Search Screen', () => {
  it('Search screen should render correctly', () => {
    const search = renderForTest(<Search />).toJSON();
    expect(search).toMatchSnapshot();
  });
  it('search screen Input', async () => {
    const screen = renderForTest(<Search />);
    field = screen.getByPlaceholderText('Search');
    onPress = screen.getByLabelText('List');
    fireEvent.changeText(field, 'lon');
  });

  it('search result list', async () => {
    const screen = renderForTest(<Search />);
    list = screen.getByLabelText('list');
  });
});
