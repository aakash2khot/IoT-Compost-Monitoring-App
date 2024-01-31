import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const Graphs = ({ sensorData }) => {
  // Function to transform raw sensor data into chart data
  const transformData = (rawData, key) => {
    return {
      labels: rawData.map(item => `Day ${item.Day}`),
      datasets: [
        {
          data: rawData.map(item => item[key]),
          color: (opacity = 1) => `rgba(255, 99, 71, ${opacity})`, // Light Tomato color
          strokeWidth: 2,
        },
      ],
    };
  };

  const temperatureData = transformData(sensorData, 'temperature');
  const phData = transformData(sensorData, 'pHValue');
  const h2sData = transformData(sensorData, 'H2S');

  // Legend items should have the same length as datasets
  const legendItems = temperatureData.labels.map((label, index) => ({
    name: label,
    color: temperatureData.datasets[0].color(),
    legendFontColor: 'black',
    legendFontSize: 12,
  }));

  return (
    <View style={styles.container}>
      {sensorData.length > 0 ? (
        <>
          <Text style={styles.label}>Temperature Vs Days</Text>
          <LineChart
            data={temperatureData}
            width={300}
            height={200}
            yAxisLabel=""
            yAxisSuffix="°C"
            withVerticalLines={false}
            withHorizontalLines={false}
            bezier
            style={styles.chart}
            segments={3}
            chartConfig={{
              color: (opacity = 1) => `rgba(255, 99, 71, ${opacity})`, // Light Tomato color
            }}
          />
          <Text style={styles.label}>pH Value Vs Days</Text>
          <LineChart
            data={phData}
            width={300}
            height={200}
            yAxisLabel=""
            yAxisSuffix=""
            withVerticalLines={false}
            withHorizontalLines={false}
            bezier
            style={styles.chart}
            segments={3}
            chartConfig={{
              color: (opacity = 1) => `rgba(154, 205, 50, ${opacity})`, // Light Yellow Green color
            }}
          />
          <Text style={styles.label}>H2S Vs Days</Text>
          <LineChart
            data={h2sData}
            width={300}
            height={200}
            yAxisLabel=""
            yAxisSuffix=""
            withVerticalLines={false}
            withHorizontalLines={false}
            bezier
            style={styles.chart}
            segments={3}
            chartConfig={{
              color: (opacity = 1) => `rgba(200, 200, 20, ${opacity})`, // Light Dark Blue color
            }}
          />
        </>
      ) : (
        <Text style={styles.label}>No sensor data available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#795548', // Brown color
  },
  chart: {
    marginVertical: 8,
    borderRadius: 8,
  },
});

export default Graphs;
