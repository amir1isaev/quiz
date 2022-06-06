import { AnswersType } from '@/enums'
import { randomId } from '@/utils'
import { Quiz, Segment } from 'src/core/interface'

export const quizs: Quiz[] = [
	{
		id: 1,
		title: 'Насколько ты хорошо знаешь React ?',
		description: 'Этот тест проверить насколько ты хорошо знаешь базовые знание React ?',
		questions: [
			{
				id: 1,
				title: 'React - это библиотека',
				rightAnswer: [1],
				answers: {
					type: AnswersType.BUTTONS,
					arr: [
						{ id: 1, title: 'ДА' },
						{ id: 2, title: 'НЕТ' },
					],
				},
				enteredResponse: null,
			},
			{
				id: 2,
				title: 'Что из это не являеться Хуком ?',
				rightAnswer: [2],
				answers: {
					type: AnswersType.RADIO_BUTTONS,
					arr: [
						{ id: 1, title: 'useMemo' },
						{ id: 2, title: 'useSelector' },
						{ id: 3, title: 'getStore' },
						{ id: 4, title: 'useDispath' },
					],
				},
				enteredResponse: null,
			},
			{
				id: 3,
				title: 'Что из это  являеться Хуком ?',
				rightAnswer: [2],
				answers: {
					type: AnswersType.CHECKBOXS,
					arr: [
						{ id: 2, title: 'useSelector' },
						{ id: 1, title: 'useMemo' },
						{ id: 4, title: 'useDispath' },
						{ id: 3, title: 'getStore' },
					],
				},
				enteredResponse: null,
			},
		],
	},
]

export const newQuestion = () => ({
	id: randomId(),
	title: '',
	rightAnswer: [],
	answers: {
		type: AnswersType.CHECKBOXS,
		arr: [{ id: randomId(), title: '' }],
	},
	enteredResponse: null,
})

export const answerTypeSegments: Segment[] = [
	{ id: randomId(), slug: AnswersType.CHECKBOXS, title: 'Несколько' },
	{ id: randomId(), slug: AnswersType.RADIO_BUTTONS, title: 'Один' },
	{ id: randomId(), slug: AnswersType.BUTTONS, title: 'Кнопки' },
]
export const oneQuiz = quizs[0]
