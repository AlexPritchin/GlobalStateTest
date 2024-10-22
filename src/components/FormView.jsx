import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useFormik } from 'formik';

const FormView = ({ item, submitTitle, submitCallback }) => {
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      title: item?.title ?? '',
      subTitle: item?.subTitle ?? '',
    },
    onSubmit: (values) => {
      submitCallback({
        id: item?.id,
        ...values,
      });
      console.log(values);
    },
  });
  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 30, paddingLeft: 10, borderWidth: 1,  borderRadius: 6 }}
        placeholder='Title'
        onChangeText={handleChange('title')}
        value={values.title}
      />
      <TextInput
        style={{ height: 30, marginTop: 30, paddingLeft: 10, borderWidth: 1, borderRadius: 6 }}
        placeholder='Subtitle'
        onChangeText={handleChange('subTitle')}
        value={values.subTitle}
      />
      <TouchableOpacity
        style={{ alignSelf: 'center', justifyContent: 'center', alignItems: 'center', width: '50%', height: 30, marginTop: 30, borderWidth: 1, borderRadius: 6, backgroundColor: 'deepskyblue' }}
        onPress={handleSubmit}>
        <Text style={{ fontSize: 16, color: 'white' }}>{submitTitle}</Text>
      </TouchableOpacity>
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

export default FormView;
