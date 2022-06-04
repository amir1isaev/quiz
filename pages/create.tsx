import QuestionCreate from '@/components/create/QuestionCreate'
import { AnswersType } from '@/enums'
import Divider from '@/layout/Divider'
import Button from '@/ui/Button'
import Input from '@/ui/Input'
import { NextPage } from 'next'
import { FC, useState } from 'react'
import { Question } from 'src/core/interface'

const Create: NextPage<IProps> = () => {
	const [title, setTitle] = useState<string>('')
	const [description, setDescription] = useState<string>('')
	const [questions, setQuestions] = useState<Question[]>([
		{
			id: 1,
			title: '',
			rightAnswer: { id: 1, title: '' },
			answers: {
				type: AnswersType.TEXT,
				arr: [
					{ id: 1, title: 'ДА' },
					{ id: 2, title: 'НЕТ' },
				],
			},
			enteredResponse: null,
		},
	])

	const changeValueHandler = (value: string, id: number) => {
		const newArr = questions.map((item) => {
			if (item.id === id) {
				item.title = value
			}
			return item
		})
		setQuestions(newArr)
	}

	return (
		<div>
			<div className='flex flex-col gap-6'>
				<div className=''>
					<Input value={title} onChange={(value) => setTitle(value)} className='font-bold text-2xl' placeholder='Загаловок' />
					<div className='mt-2'>
						<Input value={description} onChange={(value) => setDescription(value)} placeholder='Описание' />
					</div>
				</div>
				<Divider />
				<div className='flex flex-col gap-4'>
					{questions.map((item) => (
						<QuestionCreate changeValueHandler={changeValueHandler} key={item.id} item={item} />
					))}
				</div>
				<div className=''>
					<Button className='bg-blue-600 dark:bg-blue-600 hover:bg-blue-800 text-white hover:dark:bg-blue-800'>Cоздать</Button>
				</div>
			</div>
		</div>
	)
}

interface IProps {}
export default Create
