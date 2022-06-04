import Question from './question'

interface Quiz {
	id: number
	title: string
	description: string
	questions: Question[]
}
export default Quiz
