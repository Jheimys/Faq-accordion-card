const questions = document.querySelectorAll('.question')

questions.forEach((question) => {
    question.addEventListener('click', () => {
        const questionCliked = question.parentNode.classList.contains('active')
        console.log(questionCliked)

        if(questionCliked === false) {
            question.parentNode.classList.add('active')
        } else {
            question.parentNode.classList.remove('active')
        }
    })
})