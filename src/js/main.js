let question = document.querySelector('.question_one')
let answer = document.querySelector('.answer_one')

question.addEventListener('click', () => {
	answer.classList.toggle('display-yes')
})
