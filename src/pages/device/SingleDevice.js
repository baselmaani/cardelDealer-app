import React from 'react';
import { Alert, View } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';
const LeftContent = (props) => <Avatar.Icon {...props} icon='folder' />;
const SingleDevice = ({ route }) => {
  const { item, deleteDevice } = route.params;
  /* const createButtonAlert = (id) =>
 Alert.alert(`are you sure to delete ${item.name} ?`, [
      {
        text: 'Ok',
        onPress: () => deleteDevice(id),
      },
      { text: 'Cancel', style: 'cancel' },
    ]);
*/
  console.log(item);
  return (
    <View>
      <Card>
        <Card.Title
          title={item.name}
          subtitle={item.model}
          left={LeftContent}
        />
        <Card.Content>
          <Text variant='bodyMedium'>Price:{item.price} kr</Text>
          <Text variant='bodyMedium'>Quality:{item.quality}</Text>
        </Card.Content>

        <Card.Actions>
          <Button>Update</Button>
          <Button>Delete</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default SingleDevice;
