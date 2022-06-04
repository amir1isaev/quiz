import Input from '@/ui/Input'
import { FC, useState } from 'react'

const QuestionText: FC<IProps> = (p) => {
	const { id } = p
	const [value, setValue] = useState<string>('')

	return (
		<div>
			<Input value={value} onChange={(value) => setValue(value)} placeholder='Введитие текст' />
		</div>
	)
}

interface IProps {
	id: number
}
export default QuestionText
