import React, {useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {getRandomizedQuestions} from '../utils/questions';
import {Question} from '../models/question'; // Make sure this import is correct

// Define the types for your navigation stack
type RootStackParamList = {
  Quiz: undefined; // No parameters expected for the Quiz screen
  Leaderboard: {score: number}; // Expect a 'score' parameter for the Leaderboard screen
};

// Props type definition
type QuizScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Quiz'>;
  route: RouteProp<RootStackParamList, 'Quiz'>;
};

const QuizScreen: React.FC<QuizScreenProps> = ({navigation}) => {
  // Explicitly declare the type of the state array
  const [questions, setQuestions] = useState<Question[]>([]); // Type the state as Question[]

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const randomQuestions = getRandomizedQuestions(); // This should return Question[]
    setQuestions(randomQuestions); // No error expected now
  }, []);

  const handleAnswer = (selectedAnswer: string) => {
    const question = questions[currentQuestionIndex];
    if (selectedAnswer === question.correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      navigation.navigate('Leaderboard', {score});
    }
  };

  return (
    <View style={styles.container}>
      {questions.length > 0 && (
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            {questions[currentQuestionIndex].question}
          </Text>
          {questions[currentQuestionIndex].answers.map((answer, index) => (
            <Button
              key={index}
              title={answer}
              onPress={() => handleAnswer(answer)}
              color="#f194ff"
            />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  questionContainer: {
    width: '100%',
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default QuizScreen;
