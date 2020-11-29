import React from 'react';
import { TouchableWithoutFeedback, Keyboard, View, KeyboardAvoidingView } from 'react-native';

const DismissKeyboardHOC = (Comp) => {
  return ({ children, ...props }) => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Comp {...props}>{children}</Comp>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
const DismissKeyboardView = DismissKeyboardHOC(View);
export default DismissKeyboardView;
