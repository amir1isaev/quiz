import Button from '@/ui/Button'
import { FC } from 'react'
import { Answer } from 'src/core/interface'

const QuestionButtons: FC<IProps> = (p) => {
	const { arr, id, enteredResponse, enteredResponseHandler } = p

	return (
		<div className='flex gap-2'>
			{arr.map((item) => (
				<Button
					onClick={() => enteredResponseHandler(id, item.id)}
					className={enteredResponse?.find((el) => el === item.id) ? 'bg-blue-600 text-white' : undefined}
					key={item.id}
				>
					{item.title}
				</Button>
			))}
		</div>
	)
}

interface IProps {
	arr: Answer[]
	enteredResponse: number[] | null
	enteredResponseHandler: (id: number, answerId: number) => void
	id: number
}
export default QuestionButtons
