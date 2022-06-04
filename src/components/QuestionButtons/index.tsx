import Button from '@/ui/Button'
import { FC } from 'react'
import { Answer } from 'src/core/interface'

const QuestionButtons: FC<IProps> = (p) => {
	const { arr, id } = p
	return (
		<div className='flex gap-2'>
			{arr.map((item) => (
				<Button key={item.id}>{item.title}</Button>
			))}
		</div>
	)
}

interface IProps {
	arr: Answer[]
	id: number
}
export default QuestionButtons
