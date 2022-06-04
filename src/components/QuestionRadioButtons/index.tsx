import Button from '@/ui/Button'
import Radio from '@/ui/Radio'
import { FC } from 'react'
import { Answer } from 'src/core/interface'

const QuestionRadioButtons: FC<IProps> = (p) => {
	const { arr, index, id } = p

	return (
		<div className='flex flex-col gap-2'>
			{arr.map((item) => (
				<Radio key={item.id} id={item.title + index + id}>
					{item.title}
				</Radio>
			))}
		</div>
	)
}

interface IProps {
	arr: Answer[]
	index: number
	id: number
}
export default QuestionRadioButtons
