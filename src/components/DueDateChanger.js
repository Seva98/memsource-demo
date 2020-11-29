import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { useActionSheet } from '@expo/react-native-action-sheet';

const DueDateChanger = ({ onChange }) => {
  const dueDates = ['4 Hours', '8 Hours', '24 Hours', '72 Hours', 'No Due Date'];
  const dueDatesValues = [4, 8, 24, 72, 0];
  const [selectedDueDate, setSelectedDueDate] = React.useState(4);
  const { showActionSheetWithOptions } = useActionSheet();
  const showActionSheet = () => {
    showActionSheetWithOptions({ options: [...dueDates, 'Cancel'] }, (value) => {
      setSelectedDueDate(value);
      onChange(dueDatesValues[value]);
    });
  };

  return (
    <View>
      <Button title={`Selected Due Date: ${dueDates[selectedDueDate]}`} onPress={showActionSheet} />
      <Slider
        style={styles.slider}
        value={selectedDueDate}
        onValueChange={(value) => setSelectedDueDate(value)}
        onSlidingComplete={(value) => onChange(dueDatesValues[value])}
        minimumValue={0}
        maximumValue={4}
        step={1}
      />
    </View>
  );
};

export default DueDateChanger;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slider: {
    width: '80%',
    maxWidth: 400,
    alignSelf: 'center',
  },
  button: {
    width: '80%',
    maxWidth: 400,
  },
});
