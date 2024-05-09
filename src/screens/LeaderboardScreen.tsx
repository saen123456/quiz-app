import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RouteProp} from '@react-navigation/native';

// Define the types for your navigation stack if not already defined elsewhere
type RootStackParamList = {
  Leaderboard: {score: number}; // Define the parameters expected by the Leaderboard screen
};

// Props type definition for LeaderboardScreen
type LeaderboardScreenProps = {
  route: RouteProp<RootStackParamList, 'Leaderboard'>;
};

const LeaderboardScreen: React.FC<LeaderboardScreenProps> = ({route}) => {
  const {score} = route.params; // Now safely destructuring `score` from route.params

  return (
    <View style={styles.container}>
      <Text style={styles.scoreText}>Your Score: {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default LeaderboardScreen;
