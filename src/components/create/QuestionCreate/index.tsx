import QuestionLayout from '@/layout/QuestionLayout'
import Input from '@/ui/Input'
import { FC } from 'react'
import { Question } from 'src/core/interface'

const QuestionCreate: FC<IProps> = (p) => {
	const { item, changeValueHandler } = p

	return (
		<QuestionLayout>
			<div className=''>
				<Input className='text-lg font-medium' value={item.title} onChange={(value) => changeValueHandler(value, item.id)} placeholder='Вопрос' />
			</div>
			<div className=''></div>
			<div className=''></div>
		</QuestionLayout>
	)
}

interface IProps {
	item: Question
	changeValueHandler: (value: string, id: number) => void
}
export default QuestionCreate
