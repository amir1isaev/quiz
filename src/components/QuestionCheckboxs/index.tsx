import Button from '@/ui/Button'
import Checkbox from '@/ui/Checked'
import Radio from '@/ui/Radio'
import { FC } from 'react'
import { Answer } from 'src/core/interface'

const QuestionCheckboxs: FC<IProps> = (p) => {
	const { arr,  id, enteredResponse, enteredResponseHandler } = p

	return (
		<div className='flex flex-col gap-2'>
			{arr.map((item) => (
				<Checkbox
					onChange={() => enteredResponseHandler(id, item.id)}
					checked={!!enteredResponse?.find((el) => el == item.id)}
					key={item.id}
					id={item.id.toString()}
					name={'create_' + id.toString()}
				>
					{item.title}
				</Checkbox>
			))}
		</div>
	)
}

interface IProps {
	arr: Answer[]
	id: number
	enteredResponse: number[] | null
	enteredResponseHandler: (id: number, answerId: number) => void
}
export default QuestionCheckboxs
