// Filename: AdvancedQuizSystem.js

/**
 * This code implements an advanced quiz system with multiple question types and scoring features.
 * It provides a creative and professional approach to a quiz application.
 */

// Quiz class responsible for managing the entire quiz system
class Quiz {
  constructor() {
    this.questions = [];
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.timer = null;
  }

  /**
   * Adds a question to the quiz
   * @param {Question} question - The question object to be added
   */
  addQuestion(question) {
    this.questions.push(question);
  }

  /**
   * Starts the quiz
   */
  startQuiz() {
    console.log("Welcome to the Advanced Quiz System!");
    this.displayQuestion();
    this.startTimer();
  }

  /**
   * Displays the current question
   */
  displayQuestion() {
    const question = this.questions[this.currentQuestionIndex];

    console.log(`Question ${this.currentQuestionIndex + 1}: ${question.text}`);
    question.display();
  }

  /**
   * Handles user's answer
   * @param {string} answer - The user's selected answer
   */
  answerQuestion(answer) {
    const question = this.questions[this.currentQuestionIndex];

    if (question.checkAnswer(answer)) {
      this.score++;
      console.log("Correct answer!");
    } else {
      console.log("Wrong answer!");
    }

    console.log(`Current Score: ${this.score}`);
    this.moveToNextQuestion();
  }

  /**
   * Moves to the next question
   */
  moveToNextQuestion() {
    this.currentQuestionIndex++;

    if (this.currentQuestionIndex === this.questions.length) {
      this.endQuiz();
    } else {
      this.displayQuestion();
    }
  }

  /**
   * Ends the quiz and displays the final score
   */
  endQuiz() {
    console.log("Quiz finished!");
    console.log(`Final Score: ${this.score}`);
    this.stopTimer();
  }

  /**
   * Starts the timer for the quiz
   */
  startTimer() {
    this.timer = setInterval(() => {
      console.log("Time is running out!");
    }, 10000);
  }

  /**
   * Stops the timer for the quiz
   */
  stopTimer() {
    clearInterval(this.timer);
  }
}

// Question base class with common properties and methods
class Question {
  constructor(text, options) {
    this.text = text;
    this.options = options;
  }

  /**
   * Display the question options
   */
  display() {
    this.options.forEach((option, i) => {
      console.log(`${i + 1}. ${option}`);
    })
  }

  /**
   * Checks if the provided answer is correct
   * @param {string} answer - The user's selected answer
   * @returns {boolean} - True if the answer is correct, false otherwise
   */
  checkAnswer(answer) {
    return this.options.indexOf(answer) === this.correctIndex;
  }
}

// MultipleChoiceQuestion class representing a multiple-choice question
class MultipleChoiceQuestion extends Question {
  constructor(text, options, correctIndex) {
    super(text, options);
    this.correctIndex = correctIndex;
  }
}

// FillInTheBlanksQuestion class representing a fill-in-the-blanks question
class FillInTheBlanksQuestion extends Question {
  constructor(text, options, answer) {
    super(text, options);
    this.answer = answer;
  }

  /**
   * Checks if the provided answer is correct
   * @param {string} answer - The user's selected answer
   * @returns {boolean} - True if the answer is correct, false otherwise
   */
  checkAnswer(answer) {
    return answer.toLowerCase() === this.answer.toLowerCase();
  }
}

// Usage example:

const quiz = new Quiz();

const question1 = new MultipleChoiceQuestion(
  "What is the capital of France?",
  ["London", "Paris", "Berlin", "Rome"],
  1
);
const question2 = new FillInTheBlanksQuestion(
  "The largest planet in our solar system is ____.",
  ["Mars", "Jupiter", "Saturn", "Earth"],
  "Jupiter"
);

quiz.addQuestion(question1);
quiz.addQuestion(question2);

quiz.startQuiz();

// Output:
// Welcome to the Advanced Quiz System!
// Question 1: What is the capital of France?
// 1. London
// 2. Paris
// 3. Berlin
// 4. Rome
// (User selects option 2)
// Correct answer!
// Current Score: 1
// Question 2: The largest planet in our solar system is ____.
// 1. Mars
// 2. Jupiter
// 3. Saturn
// 4. Earth
// (User enters "Jupiter")
// Correct answer!
// Current Score: 2
// Quiz finished!
// Final Score: 2