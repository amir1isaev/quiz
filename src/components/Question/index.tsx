import { FC } from 'react'
import QuestionButtons from '../QuestionButtons'
import QuestionRadioButtons from '../QuestionRadioButtons'
import QuestionCheckboxs from '../QuestionCheckboxs'
import { AnswersType } from '@/enums'
import QuestionText from '../QuestionText'
import { Question } from 'src/core/interface'
import QuestionLayout from '@/layout/QuestionLayout'

const MyQuestion: FC<IProps> = ({ item, index }) => {
	return (
		<QuestionLayout>
			<span className='text-lg font-medium'>
				{index}. {item.title}
			</span>
			<div className='mt-2'>
				{item.answers.type === AnswersType.BUTTONS && <QuestionButtons id={item.id} arr={item.answers.arr} />}
				{item.answers.type === AnswersType.CHECKBOXS && <QuestionCheckboxs id={item.id} index={index} arr={item.answers.arr} />}
				{item.answers.type === AnswersType.RADIO_BUTTONS && <QuestionRadioButtons id={item.id} index={index} arr={item.answers.arr} />}
				{item.answers.type === AnswersType.TEXT && <QuestionText id={item.id} />}
			</div>
		</QuestionLayout>
	)
}

interface IProps {
	item: Question
	index: number
}
export default MyQuestion
