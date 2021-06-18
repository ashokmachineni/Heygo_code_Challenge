import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  ActivityIndicator,
  Keyboard,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {search, location} from '../../store/actions';
import Input from './widget/Input';
import List from './widget/List';
import {MAP_SCREEN} from '../../navigator/routes';

const Search = ({navigation}) => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const searchData = useSelector(({searchData}) => searchData);

  const onChangeQuery = text => {
    dispatch(search(text));
    setQuery(text);
  };

  const onPressTitle = async id => {
    Keyboard.dismiss();
    setIsLoading(true);
    try {
      const res = await dispatch(location(id));
      res && navigation.navigate(MAP_SCREEN);
    } catch (e) {
      console.log('ERROR::', e);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Input value={query} onChange={e => onChangeQuery(e)} />
        {isLoading && (
          <View style={s.loader}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
        <View accessibilityLabel="list" style={{paddingHorizontal: 20}}>
          <List data={searchData} onPressTitle={onPressTitle} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;

const s = StyleSheet.create({
  loader: {
    position: 'absolute',
    flex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#0000004D',
  },
});
