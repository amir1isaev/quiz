import Button from '@/ui/Button'
import Radio from '@/ui/Radio'
import { FC } from 'react'
import { Answer } from 'src/core/interface'

const QuestionRadioButtons: FC<IProps> = (p) => {
	const { arr, index, id, enteredResponse, enteredResponseHandler } = p

	return (
		<div className='flex flex-col gap-2'>
			{arr.map((item) => (
				<Radio
					checked={!!enteredResponse?.find((el) => el == item.id)}
					onChange={() => enteredResponseHandler(id, item.id)}
					name={`${item.id}`}
					key={item.id}
					id={item.title + index + id}
				>
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
	enteredResponse: number[] | null
	enteredResponseHandler: (id: number, answerId: number) => void
}
export default QuestionRadioButtons
