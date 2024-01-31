// App.js
import React, { useState, useEffect } from 'react';
import { ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import Header from './components/Header';
import StartTimeBox from './components/StartTimeBox';
import Graphs from './components/Graphs';
import StatusBox from './components/StatusBox';
import axios from 'axios';

const App = () => {
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    axios.get('http://10.0.2.2:3000/api/data', { timeout: 5000 })
      .then(response => {
        setSensorData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data from the backend:', error.message);
      });
  }, []);

  // Demo data for start time and status
  const startTime = '2022-03-01 09:00 AM';
  const status = 'Mesophilic';

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <StartTimeBox startTime={startTime} />
        <Graphs sensorData={sensorData} />
        <StatusBox status={status} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Light Gray background
  },
});

export default App;
