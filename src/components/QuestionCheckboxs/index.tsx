import Button from '@/ui/Button'
import Checkbox from '@/ui/Checked'
import Radio from '@/ui/Radio'
import { FC } from 'react'
import { Answer } from 'src/core/interface'

const QuestionCheckboxs: FC<IProps> = (p) => {
	const { arr, index, id } = p

	return (
		<div className='flex flex-col gap-2'>
			{arr.map((item) => (
				<Checkbox key={item.id} id={item.title + index + id}>
					{item.title}
				</Checkbox>
			))}
		</div>
	)
}

interface IProps {
	arr: Answer[]
	index: number
	id: number
}
export default QuestionCheckboxs
