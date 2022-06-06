import { AnswersType } from '@/enums'
import Checkbox from '@/ui/Checked'
import Input from '@/ui/Input'
import Radio from '@/ui/Radio'
import { FC } from 'react'
import { Answer, Question } from 'src/core/interface'

const MyAnswer: FC<IProps> = (p) => {
	const { item, changeAnswerValueHandler, rightAnswer, answer, index, destroyAnswerHandler, getRightAnswer } = p

	const changeCheckboxHandler = () => {}

	return (
		<div className='flex items-center gap-3 '>
			<div className='flex items-center  flex-1'>
				{item.answers.type === AnswersType.CHECKBOXS && (
					<Checkbox
						onChange={() => getRightAnswer(item.id, answer.id)}
						checked={!!rightAnswer.find((r) => r == answer.id)}
						name={'create_' + item.id.toString()}
						id={answer.id.toString()}
					></Checkbox>
				)}
				{item.answers.type === AnswersType.RADIO_BUTTONS && <Radio name={'create_' + item.id.toString()} id={answer.id.toString()}></Radio>}
				{item.answers.type === AnswersType.BUTTONS && <Radio name={'create_' + item.id.toString()} id={answer.id.toString()}></Radio>}
				<div className='pt-1   w-full'>
					<Input
						className='font-regular'
						value={answer.title}
						onChange={(value) => changeAnswerValueHandler(value, item.id, answer.id)}
						placeholder={`Ответ ${index + 1}`}
					/>
				</div>
			</div>

			<div className='group' onClick={() => destroyAnswerHandler(item.id, answer.id)}>
				<svg className='w-7  p-0.5 cursor-pointer ' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						className='fill-red-700/50 group-hover:fill-red-700'
						d='M24 7.25C25.4869 7.24995 26.9161 7.82592 27.9875 8.85701C29.0588 9.88811 29.6891 11.2941 29.746 12.78L29.75 13H37C37.3197 13.001 37.6269 13.1245 37.8583 13.3451C38.0898 13.5657 38.2279 13.8666 38.2443 14.1859C38.2607 14.5052 38.1541 14.8187 37.9465 15.0618C37.7388 15.3049 37.4459 15.4592 37.128 15.493L37 15.5H35.909L34.206 38.07C34.1253 39.1387 33.6438 40.1375 32.8579 40.8663C32.072 41.5951 31.0398 42 29.968 42H18.032C16.9602 42 15.928 41.5951 15.1421 40.8663C14.3562 40.1375 13.8747 39.1387 13.794 38.07L12.09 15.5H11C10.6905 15.5001 10.392 15.3855 10.1622 15.1782C9.93244 14.971 9.78769 14.6858 9.756 14.378L9.75 14.25C9.75 13.603 10.242 13.07 10.872 13.007L11 13H18.25C18.25 11.475 18.8558 10.0125 19.9341 8.93414C21.0125 7.8558 22.475 7.25 24 7.25V7.25ZM33.402 15.5H14.598L16.288 37.882C16.3213 38.3218 16.5194 38.7329 16.8428 39.0329C17.1662 39.3329 17.5909 39.4997 18.032 39.5H29.968C30.4093 39.5 30.8343 39.3333 31.1578 39.0333C31.4814 38.7332 31.6797 38.322 31.713 37.882L33.403 15.5H33.402ZM27.25 20.75C27.897 20.75 28.43 21.242 28.494 21.872L28.5 22V33C28.5015 33.3214 28.3791 33.6311 28.1583 33.8646C27.9374 34.0982 27.6351 34.2377 27.3141 34.2542C26.9931 34.2706 26.6781 34.1628 26.4345 33.9531C26.1909 33.7434 26.0374 33.4479 26.006 33.128L26 33V22C26 21.31 26.56 20.75 27.25 20.75ZM20.75 20.75C21.397 20.75 21.93 21.242 21.994 21.872L22 22V33C22.0015 33.3214 21.8791 33.6311 21.6583 33.8646C21.4374 34.0982 21.1351 34.2377 20.8141 34.2542C20.4931 34.2706 20.1781 34.1628 19.9345 33.9531C19.6909 33.7434 19.5374 33.4479 19.506 33.128L19.5 33V22C19.5 21.31 20.06 20.75 20.75 20.75ZM24 9.75C23.1699 9.74995 22.3712 10.0676 21.7678 10.6377C21.1644 11.2078 20.802 11.9872 20.755 12.816L20.75 13H27.25C27.25 12.138 26.9076 11.3114 26.2981 10.7019C25.6886 10.0924 24.862 9.75 24 9.75V9.75Z'
						fill='black'
					/>
				</svg>
			</div>
		</div>
	)
}

interface IProps {
	item: Question
	rightAnswer: number[]
	answer: Answer
	index: number
	changeValueHandler: (value: string, id: number) => void
	getRightAnswer: (quesId: number, id: number) => void
	changeAnswerValueHandler: (value: string, id: number, answerId: number) => void
	destroyAnswerHandler: (id: number, answerId: number) => void
}
export default MyAnswer
