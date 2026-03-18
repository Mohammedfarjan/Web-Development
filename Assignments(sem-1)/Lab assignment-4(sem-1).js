// Define the quiz question and answer
const Quizquestions = [
    {
        question:"What is the capital of France?",
        answer:"Paris"
    },
    
    {  question:"What is the largest planet in our solar system?",
        answer:"Jupiter"
    },
    {
        question:"Who painted the Mona Lisa?",
        answer:"Leonardo da Vinci"
    },
    {
        question:"What is the full form of IPS?",
        answer:"Indian Police Service"
    },
    {
        question:"What is the largest mammel in the Earth?",
        amswer:"Blue Whale"
    },
    {
        qestion:"What is the full form of HTML?",
        answer:"Hypertext Markup Language"
    }
];

// Function to run the quiz
function runQuiz() {
    let score = 0; // start score at 0

    // loop through all questions
    for (let i = 0; i < quizQuestions.length; i++) {
        let userAnswer = prompt(quizQuestions[i].question); // ask question

        if (userAnswer) {
            // normalize input
            userAnswer = userAnswer.toLowerCase().trim();

            // check answer
            if (userAnswer === quizQuestions[i].answer) {
                alert("✅ Correct!");
                score++;
            } else {
                alert("❌ Wrong! Correct answer: " + quizQuestions[i].answer);
            }
        }
    }

    // final score
    alert("Quiz finished! Your score: " + score + "/" + quizQuestions.length);
}

// run the quiz
runQuiz();