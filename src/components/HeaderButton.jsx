import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const HeaderButton = ({onPressCallback, title}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPressCallback()}>
      <Text style={{fontSize: 16}}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
});

export default HeaderButton;
