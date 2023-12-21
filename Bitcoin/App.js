// App.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const App = () => {
  const [username, setUsername] = useState('');

  const createUser = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/users', { username });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Bitcoin Saving App</Text>
      <TextInput
        placeholder="Enter your username"
        onChangeText={(text) => setUsername(text)}
      />
      <Button title="Create User" onPress={createUser} />
    </View>
  );
};

export default App;