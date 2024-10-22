import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useFormik} from 'formik';

const FormView = ({item, submitTitle, submitCallback}) => {
  const {handleChange, handleSubmit, values} = useFormik({
    initialValues: {
      title: item?.title ?? '',
      subTitle: item?.subTitle ?? '',
    },
    onSubmit: values => {
      submitCallback({
        id: item?.id,
        ...values,
      });
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Title"
        onChangeText={handleChange('title')}
        value={values.title}
      />
      <TextInput
        style={[styles.textInput, {marginTop: 30}]}
        placeholder="Subtitle"
        onChangeText={handleChange('subTitle')}
        value={values.subTitle}
      />
      <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
        <Text style={styles.submitTitle}>{submitTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: 'white',
  },
  textInput: {
    height: 30,
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 6,
  },
  submit: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: 30,
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: 'deepskyblue',
  },
  submitTitle: {
    fontSize: 16,
    color: 'white',
  },
});

export default FormView;
