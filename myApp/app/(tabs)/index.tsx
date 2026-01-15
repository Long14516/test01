import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
} from 'react-native';

const KeyboardAvoidingComponent = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>Đăng Nhập</Text>
          <Text style={styles.text1}></Text>
          <Text style={{fontSize:24}}>Nhập số điện thoại</Text>
          <Text>Dùng số điện thoại của bạn để đăng nhập hoặc đăng ký tài khoản tại OneHusingPro</Text>
          <TextInput placeholder="Nhập số điện thoại của bạn" keyboardType="phone-pad" style={styles.textInput} />
          <View style={styles.btnContainer}>
            <Button title="Tiếp Tục" disabled onPress={() => null} />
            
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
  },
  text1:{
    borderColor: '#000000',
    borderBottomWidth: 1,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});

export default KeyboardAvoidingComponent;
