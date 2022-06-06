import CreateButton from '@/components/create/CreateButton'
import CreateHeader from '@/components/create/CreteHeader'
import QuestionCreate from '@/components/create/QuestionCreate'
import { AnswersType } from '@/enums'
import Divider from '@/layout/Divider'
import Button from '@/ui/Button'
import Input from '@/ui/Input'
import Textarea from '@/ui/Textarea'
import { randomId } from '@/utils'
import { newQuestion } from 'data'
import { NextPage } from 'next'
import { FC, useState } from 'react'
import { Answer, Question } from 'src/core/interface'

const Create: NextPage<IProps> = () => {
	const [title, setTitle] = useState<string>('')
	const [description, setDescription] = useState<string>('')
	const [questions, setQuestions] = useState<Question[]>([newQuestion()])

	const changeValueHandler = (value: string, id: number) => {
		const newArr = questions.map((item) => {
			if (item.id === id) {
				item.title = value
			}
			return item
		})
		setQuestions(newArr)
	}

	const getRightAnswer = (quesId: number, id: number) => {
		const newArr = questions.map((item) => {
			if (item.id === quesId) {
				const check = item.rightAnswer.find((answer) => answer === id)
				if (check) {
					item.rightAnswer = item.rightAnswer.filter((answer) => answer !== id)
				} else {
					item.rightAnswer = [...item.rightAnswer, id]
				}
			}
			return item
		})
		setQuestions(newArr)
	}

	const changeTypeHandler = (type: string, id: number) => {
		const newArr = questions.map((item) => {
			if (item.id === id) {
				item.answers.type = type
			}
			return item
		})
		setQuestions(newArr)
	}

	const createQuestion = () => {
		const question = newQuestion()
		setQuestions([...questions, question])
	}

	const changeAnswerValueHandler = (value: string, id: number, answerId: number) => {
		const newArr = questions.map((item) => {
			if (item.id === id) {
				item.answers.arr.map((el) => {
					if (el.id === answerId) {
						el.title = value
					}
					return el
				})
			}
			return item
		})
		setQuestions(newArr)
	}

	const destroyAnswerHandler = (id: number, answerId: number) => {
		const newArr = questions.map((item) => {
			if (item.id === id) {
				item.answers.arr = item.answers.arr.filter((el) => el.id !== answerId)
			}
			return item
		})
		setQuestions(newArr)
	}

	const destroyQuesHandler = (id: number) => {
		const newArr = questions.filter((item) => item.id !== id)
		setQuestions(newArr)
	}

	const createQuestionAnswer = (id: number) => {
		const newArr = questions.map((item) => {
			if (item.id === id) {
				item.answers.arr = [...item.answers.arr, { id: randomId(), title: '' }]
			}
			return item
		})
		setQuestions(newArr)
	}

	const createQuiz = () => {
		const quiz = {
			title,
			description,
			questions,
		}
		console.log('quiz', quiz)
	}

	return (
		<div className='flex flex-col gap-6  relative'>
			<CreateHeader title={title} description={description} setDescription={setDescription} setTitle={setTitle} />
			<Divider />
			<div className='flex flex-col gap-4 '>
				{questions.map((item, index) => (
					<QuestionCreate
						destroyQuesHandler={destroyQuesHandler}
						getRightAnswer={getRightAnswer}
						createQuestionAnswer={createQuestionAnswer}
						changeTypeHandler={changeTypeHandler}
						index={index + 1}
						changeValueHandler={changeValueHandler}
						key={item.id}
						destroyAnswerHandler={destroyAnswerHandler}
						item={item}
						changeAnswerValueHandler={changeAnswerValueHandler}
					/>
				))}
				{questions.length < 20 && <CreateButton onClick={() => createQuestion()} />}
			</div>
			<div className='mt-7'>
				<Button onClick={createQuiz} className='bg-blue-600 dark:bg-blue-600 hover:bg-blue-800 text-white hover:dark:bg-blue-800'>
					Cоздать
				</Button>
			</div>
		</div>
	)
}

interface IProps {}
export default Create
