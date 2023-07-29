import * as ImagePicker from 'expo-image-picker';

export const usePickImage = ({ onSelectImage }) => {
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    if (!result.canceled) {
      onSelectImage(result.assets[0].base64);
    }
  };

  return {
    pickImage,
  };
};
