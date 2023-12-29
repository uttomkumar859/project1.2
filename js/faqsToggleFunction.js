function faqsToggleAnswer(faqsQuestionNumber) {
    var faqsanswerId = "answer" + faqsQuestionNumber;
    var faqsanswerElement = document.getElementById(faqsanswerId);

    if (faqsanswerElement.style.display === 'block') {
        faqsanswerElement.style.display = 'none';
    } else {
        faqsanswerElement.style.display = 'block';
    }
}