import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const DetailsScreen = ({ route }) => {
  const itemId = route?.params?.params?.itemId;
  return (
    <View style={styles.container}>
      <Text>Item One {itemId}</Text>
      <Text style={{ marginTop: 20 }}>Item one description</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: 'white'
  },
});

export default DetailsScreen;
