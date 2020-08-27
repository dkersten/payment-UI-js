// set inputs to vars
const inputName = document.querySelector('.input-name')
const inputNum = document.querySelector('input.input-num')
const inputDate = document.querySelector('input.input-date')

// set card elements to vars
const cardName = document.querySelector('.name')
const cardNum = document.querySelector('.card-num')
const cardDate = document.querySelector('.date')

// set placeholder content on load
cardName.textContent ='John Doe'
cardNum.textContent = '1234 5678 9012 3456'
cardDate.textContent = '10/22'

// event handler for CC owner name
inputName.addEventListener('keyup', (e) => {
	cardName.textContent = e.target.value
})

// event handler for CC number
inputNum.addEventListener('keyup', (e) => {
	let ccNum = e.target.value
	let formatedNum = ccNum.match(/.{1,4}/g)
	cardNum.textContent = formatedNum.join(' ')
})

// event handler for CC date
inputDate.addEventListener('change', (e) => {
	cardDate.textContent = e.target.value
})

// event handler for form submit
form.addEventListener('submit', (e) => {
	e.preventDefault()
	cardName.textContent ='John Doe'
	cardNum.textContent = '1234 5678 9012 3456'
	cardDate.textContent = '10/22'
	inputName.target.value = ''
	inputNum.target.value = ''
	inputDate.target.value = ''
})