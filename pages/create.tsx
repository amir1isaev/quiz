import CreateButton from '@/components/create/CreateButton'
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
	const [rightAnswer, setRightAnswer] = useState<Answer | Answer[]>([])

	const changeValueHandler = (value: string, id: number) => {
		const newArr = questions.map((item) => {
			if (item.id === id) {
				item.title = value
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

	const createQuestionAnswer = (id: number) => {
		const newArr = questions.map((item) => {
			if (item.id === id) {
				item.answers.arr = [...item.answers.arr, { id: randomId(), title: '' }]
			}
			return item
		})
		setQuestions(newArr)
	}

	return (
		<div className='flex flex-col gap-6 px-10 relative'>
			<div className=''>
				<Input value={title} onChange={(value) => setTitle(value)} className='font-bold text-2xl' placeholder='Загаловок' />
				<div className='mt-2'>
					<Textarea value={description} onChange={(value) => setDescription(value)} placeholder='Описание' />
				</div>
			</div>
			<Divider />
			<div className='flex flex-col gap-4 '>
				{questions.map((item, index) => (
					<QuestionCreate
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
				<div className='absolute left-0 bottom-10'>
					<CreateButton onClick={() => createQuestion()} />
				</div>
			</div>
			<div className='mt-7'>
				<Button className='bg-blue-600 dark:bg-blue-600 hover:bg-blue-800 text-white hover:dark:bg-blue-800'>Cоздать</Button>
			</div>
		</div>
	)
}

interface IProps {}
export default Create
