<<<<<<< HEAD
let question = document.querySelector('.question_one')
let answer = document.querySelector('.answer_one')
let questions = document.querySelectorAll('.question')
=======
>>>>>>> 572aa1f4402619bc0097ea9bc7f209258f8e436f

let questions = document.querySelectorAll('.question')



questions.forEach(question => {
	question.addEventListener('click', () => {
		let answer = question.nextElementSibling

		answer.classList.toggle('none')
	})
})

console.log(questions)
