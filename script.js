document.addEventListener("DOMContentLoaded", function() {
    const quizForm = document.getElementById("quizForm");
    const getResultsBtn = document.getElementById("getResults");

    getResultsBtn.addEventListener("click", function() {
        // Initialize scores for each option
        let scoreA = 0;
        let scoreB = 0;
        let scoreC = 0;

        // Loop through each question
        for (let i = 1; i <= 9; i++) {
            let questionName = "q" + i;
            let selectedOption = quizForm.elements[questionName].value;

            // Update scores based on selected option
            if (selectedOption === "A") {
                scoreA++;
            } else if (selectedOption === "B") {
                scoreB++;
            } else if (selectedOption === "C") {
                scoreC++;
            }
        }

        // Determine the result based on scores
        if (scoreA > scoreB && scoreA > scoreC) {
            window.location.href = "result1.html";
        } else if (scoreB > scoreA && scoreB > scoreC) {
            window.location.href = "result2.html";
        } else if (scoreC > scoreA && scoreC > scoreB) {
            window.location.href = "result3.html";
        } else {
            window.location.href = "result4.html";
        }
    });
});
