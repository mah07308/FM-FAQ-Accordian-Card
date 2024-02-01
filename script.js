const faqQuestions = document.querySelectorAll('.faq__question');
console.log(faqQuestions);

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.parentElement.querySelector('.faq__answer');
    const arrowIcon = question.querySelector('.faq__arrow-icon');
    if (answer.style.display === 'none') {
      answer.style.display = 'block';
      arrowIcon.style.transform = 'rotate(180deg)';
    } else {
      answer.style.display = 'none';
      arrowIcon.style.transform = 'rotate(0)';
    }
  });
});
