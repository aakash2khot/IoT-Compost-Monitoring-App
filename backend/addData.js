const AWS = require('aws-sdk');
const config = require('./config.js');

// Setting the configurations
AWS.config.update(config.aws_remote_config);

const addSensorData = async () => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const sensorData = [
    { Day: 1, Temperature: 32, pHValue: 7.0, H2S: 368 },
    { Day: 2, Temperature: 32, pHValue: 7.0, H2S: 367 },
    { Day: 3, Temperature: 32, pHValue: 6.8, H2S: 365 },
    { Day: 4, Temperature: 32, pHValue: 6.8, H2S: 363 },
    { Day: 5, Temperature: 32, pHValue: 6.8, H2S: 359 },
  ];

  const params = {
    TableName: "SensorData",
  };

  try {
    // Iterate through sensorData array and insert each item into the table
    for (const item of sensorData) {
      const data = await dynamodb.put({
        ...params,
        Item: {
          sensorId: "abc123", // Replace with your actual sensorId
          timestamp: Date.now(), // Use current timestamp as an example, adjust accordingly
          Day:item.Day,
          temperature: item.Temperature,
          pHValue: item.pHValue,
          H2S: item.H2S,
        },
      }).promise();

      console.log(`Sensor Data Added for Day ${item.Day}`, data);
    }
  } catch (err) {
    console.log("Error", err);
  }
};

// Call the asynchronous function to insert data
addSensorData();
