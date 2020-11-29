import React from 'react';
import { FlatList } from 'react-native';
import ProjectItem from './ProjectItem';

const ProjectsList = ({ data }) => {
  return <FlatList data={data} renderItem={ProjectItem} keyExtractor={(item) => item.id} />;
};

export default ProjectsList;
