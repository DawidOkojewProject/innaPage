let question = document.querySelector('.question_one')
let answer = document.querySelector('.answer_one')
let questions = document.querySelectorAll('.question')

console.log(questions)

const addClass = function () {
	questions.forEach(question, () => {
		question.nextElementSibling.classList.toggle('display_yes')
	})
}

addClass()
