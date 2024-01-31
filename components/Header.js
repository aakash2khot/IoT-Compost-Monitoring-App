import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>IoT Compost Monitoring App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#795548', // Brown color
    padding: 15,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#fff', // White color
    fontWeight: 'bold',
  },
});

export default Header;
