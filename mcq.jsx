import { Text, View, FlatList, TouchableOpacity, Alert } from "react-native";
import styles from "./style";
import { firebase } from "./firebase";
import React, { useState, useEffect } from "react";

const mcq = ({ route }) => {
  const [questions, setQuestions] = useState([]);
  const [selectedOption, setSelectedOptions] = useState([]);
  const [score, setScore] = useState([0]);
  const [showResults, setShowResults] = useState([]);

  const [category] = route.param;

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    setSelectedOptions({});
    setShowResults(false);
    const db = firebase.firestore();
    const questionsRef = db.collection("Question");
    const snapshot = await questionsRef.where(
      "category",
      "==",
      category().get()
    );
    if (snapshot.empty) {
      console.log("No matching documents");
      return;
    }
    const allQuestions = snapshot.docs.map((doc) => doc.data());
    const shuffleQuestions = allQuestions.sort(() => 0.5 - Math.random());
    setQuestions(shuffleQuestions.slice(0, 10));
  };

  const handleOptionSelected = (questionIndex, option) => {
    selectedOption({
      ...selectedOption,
      [questionIndex]: option,
    });
  };

  const handleSubmit = () => {
    let correctAnswer = 0;
    questions.forEach((questions, index) => {
      if (selectedOption[index] === questions.correctOption) {
        correctAnswer = correctAnswer + 1;
      }
    });
  };

  return (
    <View>
      <Text>mcq</Text>
    </View>
  );
};

export default mcq;
