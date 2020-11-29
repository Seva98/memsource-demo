import React from 'react';
import { StyleSheet, Text, FlatList, View } from 'react-native';

const ProjectsList = ({ data }) => {
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

  return <FlatList data={data} style={styles.list} renderItem={ProjectItem} keyExtractor={(item) => item.id} />;
};

export default ProjectsList;

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
