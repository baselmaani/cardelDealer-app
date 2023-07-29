import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text, Searchbar } from 'react-native-paper';
import SingleDevice from './SingleDevice';
import { useGetDealerDevice } from '../../hooks/useDealerDevice';

const GetDevices = ({ navigation }) => {
  const [search, setSearch] = React.useState('');
  const [devices, setDevices] = React.useState([]);

  const { data, isLoading } = useGetDealerDevice();

  const deleteDevice = (id) => {
    setDevices((prev) => prev.filter((d) => d.id !== id));
  };
  console.log({ data });

  return (
    <View>
      <Searchbar
        placeholder='Search'
        onChangeText={(text) => setSearch(text)}
        value={search}
        style={{ margin: 10 }}
      />
      <View>
        <FlatList
          data={search && data.filter((item) => item.name.includes(search))}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.flatListContent}
              onPress={() => {
                navigation.navigate('Single Device', {
                  item: item,
                  deleteDevice: deleteDevice(item.id),
                });
              }}
            >
              <View style={styles.singleDevice}>
                <Text style={styles.brandSearch}>{item.name}</Text>
                <Text style={styles.brandSearch}>{item.brand}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default GetDevices;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'light',
    gap: 10,
  },
  flatListContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'light',
    gap: 10,
  },
  singleDevice: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    width: '60%',
    height: 40,
    borderRadius: 10,
    gap: 10,
    marginBottom: 10,
  },
});
