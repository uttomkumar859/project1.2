function toggleAnswer(questionNumber) {
    var answerId = "answer" + questionNumber;
    var answerElement = document.getElementById(answerId);

    if (answerElement.style.display === 'block') {
        answerElement.style.display = 'none';
    } else {
        answerElement.style.display = 'block';
    }
}