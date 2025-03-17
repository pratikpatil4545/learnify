import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

const QuizScreen = () => { 
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const username = 'key_fd03ee7610484c0385d6e0a6f9bd692c';
        const password = 'secret_7a01d77f0868770432258829f46b6104f567dc668ae047fc1f173502963e6cda';
        const encodedCredentials = btoa(`${username}:${password}`);

        const response = await fetch(
          `https://learnify-academy.com/wp-json/tutor/v1/quiz-question-answer/1407`,
          {
            method: 'GET',
            headers: {
              'Authorization': `Basic ${encodedCredentials}`,
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        if (data.code === 'success') {
          const filteredQuestions = data.data.map(question => ({
            ...question,
            question_answers: question.question_answers.filter(
              answer => answer.answer_title !== 'True' && answer.answer_title !== 'False'
            ).slice(0, 4) // Ensure only 4 options
          }));
          setQuestions(filteredQuestions);
        }
      } catch (error) {
        console.error('Error fetching quiz:', error.message);
      }
    };

    fetchData();
  }, []);

  const handleAnswerSelect = (questionId, answerId, isCorrect) => {
    setSelectedAnswers(prevState => ({
      ...prevState,
      [questionId]: { answerId, isCorrect }
    }));
  };

  return (
    <ScrollView style={{ padding: 20, backgroundColor: '#fff' }}>
      {questions.map((question, index) => (
        <View key={question.question_id} style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{index + 1}. {question.question_title}</Text>
          {question.question_answers.map(answer => {
            const isSelected = selectedAnswers[question.question_id]?.answerId === answer.answer_id;
            const isCorrect = selectedAnswers[question.question_id]?.isCorrect === '1';
            return (
              <TouchableOpacity
                key={answer.answer_id}
                onPress={() => handleAnswerSelect(question.question_id, answer.answer_id, answer.is_correct)}
                style={{
                  padding: 10,
                  marginVertical: 5,
                  backgroundColor: isSelected ? (isCorrect ? 'green' : 'red') : '#f0f0f0',
                  borderRadius: 5
                }}>
                <Text style={{ color: isSelected ? 'white' : 'black' }}>{answer.answer_title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      ))}
    </ScrollView>
  );
};

export default QuizScreen;
