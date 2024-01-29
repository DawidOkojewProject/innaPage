let question = document.querySelector('.question_one')
let answer = document.querySelector('.answer_one')
let questions = document.querySelectorAll('.question')

question.addEventListener('click', () => {
	answer.classList.toggle('display-yes')
})

console.log(questions)
