import {Question} from '../models/question';

const sampleQuestions: Question[] = [
  {
    question: 'What is the capital of France?',
    answers: ['Paris', 'Rome', 'Berlin', 'Madrid'],
    correctAnswer: 'Paris',
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answers: ['Gold', 'Oxygen', 'Hydrogen', 'Nitrogen'],
    correctAnswer: 'Oxygen',
  },
  {
    question: 'What year did the Titanic sink?',
    answers: ['1912', '1905', '1898', '1923'],
    correctAnswer: '1912',
  },
  {
    question: "Who wrote 'Hamlet'?",
    answers: [
      'Charles Dickens',
      'William Shakespeare',
      'Jane Austen',
      'Leo Tolstoy',
    ],
    correctAnswer: 'William Shakespeare',
  },
  {
    question: 'What is the largest planet in our solar system?',
    answers: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    correctAnswer: 'Jupiter',
  },
  {
    question: 'What is the main ingredient in guacamole?',
    answers: ['Tomato', 'Avocado', 'Onion', 'Pepper'],
    correctAnswer: 'Avocado',
  },
  {
    question: 'Which country hosted the 2016 Summer Olympics?',
    answers: ['China', 'Brazil', 'Russia', 'Japan'],
    correctAnswer: 'Brazil',
  },
  {
    question: 'What is the hardest natural substance on Earth?',
    answers: ['Gold', 'Iron', 'Diamond', 'Quartz'],
    correctAnswer: 'Diamond',
  },
  {
    question: 'What is the longest river in the world?',
    answers: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'],
    correctAnswer: 'Nile',
  },
  {
    question: 'Who painted the Mona Lisa?',
    answers: [
      'Vincent Van Gogh',
      'Leonardo da Vinci',
      'Pablo Picasso',
      'Claude Monet',
    ],
    correctAnswer: 'Leonardo da Vinci',
  },
  {
    question: 'What is the smallest country in the world?',
    answers: ['Vatican City', 'Monaco', 'Nauru', 'Liechtenstein'],
    correctAnswer: 'Vatican City',
  },
  {
    question: 'What organ in the human body produces insulin?',
    answers: ['Pancreas', 'Liver', 'Stomach', 'Kidney'],
    correctAnswer: 'Pancreas',
  },
  {
    question:
      'What is the term for a word that is similar in meaning to another word?',
    answers: ['Antonym', 'Synonym', 'Acronym', 'Homonym'],
    correctAnswer: 'Synonym',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    answers: ['Mars', 'Jupiter', 'Saturn', 'Venus'],
    correctAnswer: 'Mars',
  },
  {
    question: 'In which continent is the Sahara Desert located?',
    answers: ['Asia', 'Africa', 'North America', 'Australia'],
    correctAnswer: 'Africa',
  },
  {
    question: 'What is the currency of Japan?',
    answers: ['Yen', 'Won', 'Dollar', 'Rupee'],
    correctAnswer: 'Yen',
  },
  {
    question: 'What year did World War I begin?',
    answers: ['1914', '1905', '1899', '1923'],
    correctAnswer: '1914',
  },
  {
    question: 'Which animal is known as the king of the jungle?',
    answers: ['Tiger', 'Lion', 'Elephant', 'Gorilla'],
    correctAnswer: 'Lion',
  },
  {
    question: 'What temperature does water boil at?',
    answers: ['100°C', '90°C', '80°C', '110°C'],
    correctAnswer: '100°C',
  },
  {
    question: "Who is the author of 'Pride and Prejudice'?",
    answers: [
      'Emily Brontë',
      'Charlotte Brontë',
      'Jane Austen',
      'Mary Shelley',
    ],
    correctAnswer: 'Jane Austen',
  },
];

export const getRandomizedQuestions = (): Question[] => {
  return sampleQuestions
    .sort(() => Math.random() - 0.5)
    .map(q => ({
      ...q,
      answers: q.answers.sort(() => Math.random() - 0.5),
    }));
};
