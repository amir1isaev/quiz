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
				rightAnswer: { id: 1, title: 'ДА' },
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
				rightAnswer: { id: 1, title: 'ДА' },
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
				rightAnswer: [
					{ id: 2, title: 'useSelector' },
					{ id: 1, title: 'useMemo' },
					{ id: 4, title: 'useDispath' },
				],
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
			{
				id: 4,
				title: 'Знаешь такую фигню как реакт ?',
				rightAnswer: [
					{ id: 1, title: 'Vue' },
					{ id: 2, title: 'Angular' },
				],
				answers: {
					type: AnswersType.TEXT,
					arr: [],
				},
				enteredResponse: null,
			},
		],
	},
]

export const newQuestion = () => ({
	id: randomId(),
	title: '',
	rightAnswer: { id: 1, title: '' },
	answers: {
		type: AnswersType.CHECKBOXS,
		arr: [{ id: randomId(), title: '' }],
	},
	enteredResponse: null,
})

export const answerTypeSegments: Segment[] = [
	{ id: randomId(), slug: AnswersType.TEXT, title: 'Текст' },
	{ id: randomId(), slug: AnswersType.CHECKBOXS, title: 'Несколько' },
	{ id: randomId(), slug: AnswersType.RADIO_BUTTONS, title: 'Один' },
	{ id: randomId(), slug: AnswersType.BUTTONS, title: 'Кнопки' },
]
export const quiz = quizs[0]
