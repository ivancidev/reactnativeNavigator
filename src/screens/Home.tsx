import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../types/stack';
import ButtonComponent from '../components/ButtonComponent';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type HomeProps = {
  navigation: HomeScreenNavigationProp;
};

const Home: React.FC<HomeProps> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.background}>
      <View>
        <Text style={styles.text}>Home Screen😎</Text>
        <ButtonComponent
          title="Go to Navigation!"
          onPress={() => navigation.navigate('Notifications')}
          style={styles.btn}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#130f40'
  },
  btn: {
    backgroundColor: '#34e7e4'
  },
  text: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold'
  }
});

export default Home;
