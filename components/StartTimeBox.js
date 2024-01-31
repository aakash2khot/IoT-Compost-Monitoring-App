import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StartTimeBox = ({ startTime }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Start Time of Composting</Text>
      <Text style={styles.startTime}>{startTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff', // White background
    padding: 20,
    margin: 15,
    borderRadius: 10,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    color: '#333', // Dark Gray color
    marginBottom: 10,
  },
  startTime: {
    fontSize: 18,
    color: '#000', // Black color
    fontWeight: 'bold',
  },
});

export default StartTimeBox;
