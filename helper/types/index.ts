type QuestionText = {
  text: string;
};

type Questions = {
  category: string;
  id: string;
  tags: string[];
  difficulty: string;
  regions: string[];
  isNiche: boolean;
  question: QuestionText;
  correctAnswer: string;
  incorrectAnswers: string[];
  type: string;
};

type SubmitQuestionType = {
  question: string;
  correctAnswer: string;
  wrongAnswer1: string;
  wrongAnswer2: string;
  wrongAnswer3: string;
};
