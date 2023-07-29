import React from 'react';
import { ActivityIndicator, Text, TextInput } from 'react-native-paper';
import {
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  View,
  StyleSheet,
  Button,
  TouchableHighlight,
  ScrollView,
  Touchable,
} from 'react-native';
import { useBrands } from '../../hooks/useBrands';
import CustomButton from '../../shared/button/CustomButton';

const BrandAndModel = ({ navigation }) => {
  const [model, setModel] = React.useState('');
  const [brand, setBrand] = React.useState('');
  const [search, setSearch] = React.useState('');
  const { data, isLoading } = useBrands(search);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            label='Brand'
            value={brand}
            onChangeText={(text) => {
              setSearch(text);
              setBrand(text);
            }}
            placeholder='Enter Model'
          />
        </View>
        <View style={styles.flatListContainer}>
          {isLoading ? (
            <ActivityIndicator size='large' color='blue' /> // Show a loading indicator
          ) : (
            <>
              <FlatList
                data={
                  search && data.filter((item) => item.name.includes(search))
                }
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.flatListContent}
                    onPress={() => {
                      setBrand(item.name);
                      setSearch('');
                    }}
                  >
                    <Text style={styles.brandSearch}>{item.name}</Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
              />
            </>
          )}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            label='Model'
            value={model}
            onChangeText={(text) => setModel(text)}
            placeholder='Enter Brand'
          />
        </View>

        <CustomButton
          onPress={() => navigation.navigate('Add Device', { brand, model })}
          disabled={!brand || !model || isLoading}
          title='Add Device'
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '80%',
    marginBottom: 2,
  },
  flatListContainer: {
    width: '50%',
    height: 200,
    marginBottom: 10,
  },
  flatListContent: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },

  brandSearch: {
    backgroundColor: 'lightblue',
    marginVertical: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    padding: 5,
    borderRadius: 20,
    width: '100%',
    textAlign: 'center',
  },
});

export default BrandAndModel;
