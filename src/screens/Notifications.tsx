import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {};

const Notifications: React.FC = () => {
  return (
    <View style={styles.background}>
      <Text style={styles.text}>Notifications Screen👋</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4bcffa'
  },
  text: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Notifications;
