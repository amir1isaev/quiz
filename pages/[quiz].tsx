import Divider from '@/layout/Divider'
import { NextPage } from 'next'
import Question from '@/components/Question'
import { oneQuiz } from 'data'
import Button from '@/ui/Button'
import { useState } from 'react'
import { Quiz } from 'src/core/interface'
import { AnswersType } from '@/enums'

const quizPage: NextPage<IProps> = () => {
	// const { title, description, questions } = quiz
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [quiz, setQuiz] = useState<Quiz>(oneQuiz)

	const enteredResponseHandler = (id: number, answerId: number) => {
		const newQuestions = quiz.questions.map((item) => {
			if (item.id === id) {
				const enteredResponses = item.enteredResponse ?? []
				if (item.answers.type === AnswersType.BUTTONS || item.answers.type === AnswersType.RADIO_BUTTONS) {
					item.enteredResponse = [answerId]
				}
				if (item.answers.type === AnswersType.CHECKBOXS) {
					const check = enteredResponses.find((answer) => answer === answerId)
					if (check) {
						item.enteredResponse = enteredResponses.filter((answer) => answer !== answerId)
					} else {
						item.enteredResponse = [...enteredResponses, answerId]
					}
				}
			}
			return item
		})
		setQuiz({ ...quiz, questions: newQuestions })
	}

	const endQuizHandler = () => {
		console.log('quiz', quiz)
	}

	return (
		<div className='flex flex-col gap-6'>
			<div className=''>
				<h1 className='font-bold text-2xl'>{quiz.title}</h1>
				<p className='text-gray-700 dark:text-gray-300 mt-2'>{quiz.description}</p>
			</div>
			<Divider />
			<div className='flex flex-col gap-4'>
				{quiz.questions.map((item, index) => (
					<Question enteredResponseHandler={enteredResponseHandler} item={item} index={index + 1} key={item.id} />
				))}
			</div>
			<div className=''>
				<Button onClick={endQuizHandler} className='bg-blue-600 dark:bg-blue-600 hover:bg-blue-800 text-white hover:dark:bg-blue-800'>
					Завершить
				</Button>
			</div>
		</div>
	)
}

interface IProps {}
export default quizPage
