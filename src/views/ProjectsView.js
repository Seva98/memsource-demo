import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Button } from 'react-native';
import Header from '../components/Header';
import axios from 'axios';
import { API_URL } from '../constants';
import { useSelector } from 'react-redux';
import ProjectsList from '../components/ProjectsList';
import DueDateChanger from '../components/DueDateChanger';

const ProjectsView = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [projects, setProjects] = React.useState([]);
  const [dueDate, setDueDate] = React.useState(0);
  const token = useSelector((state) => state.auth.token);

  const fetchProjects = async (dueDate) => {
    setIsLoading(true);
    try {
      const response = await axios.get(API_URL + '/api2/v1/projects', {
        params: { token, dueInHours: dueDate },
      });
      setProjects(response.data.content);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  React.useEffect(() => {
    fetchProjects(dueDate);
  }, [dueDate]);

  return (
    <View style={styles.container}>
      <Header title="Your Projects" />
      {isLoading && <ActivityIndicator />}
      <DueDateChanger onChange={(value) => setDueDate(value)} />
      <ProjectsList data={projects} />
    </View>
  );
};

export default ProjectsView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
