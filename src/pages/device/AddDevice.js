import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import CameraView from '../../shared/camera/CameraView';
import { IconButton, Text } from 'react-native-paper';
import { usePickImage } from '../../hooks/usePickImage';
import ImagesList from '../../shared/imagesList/ImagesList';
import { useDealerDevice } from '../../hooks/useDealerDevice';
import CustomButton from '../../shared/button/CustomButton';

const AddDevice = ({ route }) => {
  const [section, setSection] = useState('');
  const [deviceName, setDeviceName] = useState('');
  const [devicePrice, setDevicePrice] = useState('');
  const [deviceQuality, setDeviceQuality] = useState('');
  const [displayCamera, setDisplayCamera] = useState(false);
  const [capturedPhotos, setCapturedPhotos] = useState([]);
  const { pickImage } = usePickImage({
    onSelectImage: (image) => onSavePhoto(image),
  });
  const onSavePhoto = (photo) => {
    if (!capturedPhotos.find((c) => c === photo)) {
      setCapturedPhotos((prev) => [...prev, photo]);
    }
  };
  const onRemoveImage = (img) => {
    setCapturedPhotos((prev) => prev.filter((c) => c !== img));
  };

  const mutation = useDealerDevice();
  const { brand, model } = route.params;
  const onSave = async () => {
    console.log('save');
    await mutation.mutate({
      name: 'name',
      price: 12,
      quality: 'A',
      images: ['img', 'ing2'],
      brand: brand,
      model: model,
    });
  };

  mutation.isLoading && <Text>Loading...</Text>;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder='Enter Section'
            onChangeText={(text) => setSection(text)}
            value={section}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder='Device Name'
            onChangeText={(text) => setDeviceName(text)}
            value={deviceName}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder='Device Price'
            onChangeText={(text) => setDevicePrice(text)}
            value={devicePrice}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder='Device Quality'
            onChangeText={(text) => setDeviceQuality(text)}
            value={deviceQuality}
          />
        </View>
        <View style={styles.IconContainer}>
          <IconButton
            icon='camera'
            color={'#03A9F4'}
            size={40}
            onPress={() => setDisplayCamera(true)}
            style={{ paddiing: 10 }}
          />

          <IconButton
            icon='image'
            color={'#4CAF50'}
            size={40}
            onPress={pickImage}
            style={{ paddiing: 10 }}
          />
        </View>

        {displayCamera && (
          <CameraView
            onTake={onSavePhoto}
            onClose={() => setDisplayCamera(false)}
          />
        )}

        {!displayCamera && (
          <View>
            <CustomButton title={'Save'} size={40} onPress={onSave} />
          </View>
        )}
        {capturedPhotos.length > 0 && !displayCamera && (
          <ImagesList images={capturedPhotos} onRemoveImage={onRemoveImage} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default AddDevice;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 2,
    padding: 10,
    borderColor: 'gray',
    backgroundColor: 'lightgray',
    borderRadius: 10,
    color: 'black',
  },
  flatListContainer: {
    width: '80%',
  },
  flatListContent: {
    alignItems: 'center',
  },

  IconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
