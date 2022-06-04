import Answer from './answer'

interface Question {
	id: number
	title: string
	answers: {
		type: string
		arr: Answer[]
	}
	rightAnswer: Answer | Answer[]
	enteredResponse: Answer | null | Answer[]
}
export default Question
