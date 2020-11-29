import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

const ProjectItem = ({ item }) => {
  const { name, sourceLang, targetLangs, status } = item;

  return (
    <View style={styles.item}>
      <View style={styles.itemHeader}>
        <Text style={[styles.text, styles.textName]}>{name}</Text>
        <Text style={[styles.text, styles.textStatus]}>{status}</Text>
      </View>
      <View style={styles.itemBody}>
        <Text style={[styles.text, styles.textBodyHeader]}>Source Language</Text>
        <Text style={[styles.text]}>{sourceLang.toUpperCase()}</Text>
        <Text style={[styles.text, styles.textBodyHeader]}>Target Language</Text>
        <Text style={[styles.text]}>{targetLangs.join(', ').toUpperCase()}</Text>
      </View>
    </View>
  );
};

export default ProjectItem;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#242D37',
    color: 'white',
    marginVertical: 10,
    width: '100%',
    padding: 10,
  },
  text: {
    color: 'white',
  },
  textName: {
    fontSize: 24,
    fontWeight: '700',
  },
  textStatus: {
    fontWeight: '200',
  },
  itemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textBodyHeader: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 8,
  },
});
