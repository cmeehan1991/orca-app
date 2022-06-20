/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, Node } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Colors,DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginView from './views/LoginView.js';
import GridDashboard from './components/GridDashboard.js';
import ChemicalsView from './views/ChemicalsView.js';



function HomeScreen({navigation}) {
  return (
    <View>
      <GridDashboard 
        navigation={navigation}
      />
    </View>
  );
}

function ChemicalsScreen() {
  return (
    <View>
      <ChemicalsView />
    </View>
  );
}

function TasksScreen() {
  return (
    <View>
      <Text>Tasks</Text>
    </View>
  );
}

function ProfileScreen(){
  return (
    <View>
      <Text>Profile</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [user, setUser] = useState(async() => {
    const userData = await AsyncStorage.getItem("USER");
    setUser(userData || null)
  });
      
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    height:'100%'
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      { user !== null && 
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Chemicals" component={ChemicalsScreen} />
            <Tab.Screen name="Tasks" component={TasksScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      } 
      
      { user === null &&
        <LoginView  
        setUser={setUser} />
      }
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
