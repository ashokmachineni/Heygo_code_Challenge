import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

const List = ({data, onPressTitle}) => {
  return (
    <View accessible={true} accessibilityLabel="List">
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        {data?.map((item, index) => (
          <View key={index} style={styles.listContainer}>
            <TouchableOpacity
              accessibilityLabel="press"
              onPress={() => onPressTitle(item?.id)}>
              <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
  listContainer: {
    paddingVertical: 8,
  },
});
