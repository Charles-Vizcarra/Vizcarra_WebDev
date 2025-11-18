// Show quiz after clicking NEXT
function startQuiz() {
    const name = document.getElementById("userName").value.trim();
    const email = document.getElementById("userEmail").value.trim();

    if (name === "" || email === "") {
        alert("Please enter both your name and email.");
        return;
    }

    // Hide welcome page
    document.getElementById("welcome-page").style.display = "none";

    // Show quiz
    document.getElementById("quiz-page").style.display = "block";

    // Display greeting
    document.getElementById("welcomeUser").innerHTML =
        `Hello, <b>${name}</b>! Good luck with your quiz.`;
}

// Check all answers using answer as arrays to store all the answers from q1-5
function checkAllAnswers() {
    let score = 0;

    const answers = [
        { input: "q1", correct: "22", feedback: "f1" },
        { input: "q2", correct: "<a>", feedback: "f2" },
        { input: "q3", correct: "color", feedback: "f3" },
        { input: "q4", correct: "font-size", feedback: "f4" },
        { input: "q5", correct: "padding", feedback: "f5" }
    ];

    // Loop through each question
    answers.forEach(item => {
        let userAns = document.getElementById(item.input).value.trim().toLowerCase();
        let correctAns = item.correct.toLowerCase();

        if (userAns === correctAns) {
            document.getElementById(item.feedback).innerHTML = "✅ Correct!";
            document.getElementById(item.feedback).style.color = "green";
            score++;
        } else {
            document.getElementById(item.feedback).innerHTML = "❌ Incorrect!";
            document.getElementById(item.feedback).style.color = "red";
        }
    });

    // Final score
    document.getElementById("final-score").innerHTML = 
        `Your Score: ${score} / 5`;
}
