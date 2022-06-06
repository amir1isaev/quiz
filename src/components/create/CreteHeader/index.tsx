import Input from '@/ui/Input'
import Textarea from '@/ui/Textarea'
import { FC } from 'react'

const CreateHeader: FC<IProps> = (p) => {
	const { title, description, setTitle, setDescription } = p
	return (
		<div>
			<Input value={title} onChange={(value) => setTitle(value)} className='font-bold text-2xl' placeholder='Загаловок' />
			<div className='mt-2'>
				<Textarea value={description} onChange={(value) => setDescription(value)} placeholder='Описание' />
			</div>
		</div>
	)
}

interface IProps {
	title: string
	description: string
	setDescription: (description: string) => void
	setTitle: (description: string) => void
}
export default CreateHeader
