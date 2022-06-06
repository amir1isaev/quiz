import Answer from './answer'

interface Question {
	id: number
	title: string
	answers: {
		type: string
		arr: Answer[]
	}
	rightAnswer: number[]
	enteredResponse: null | number[]
}
export default Question
