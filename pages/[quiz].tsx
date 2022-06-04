import Divider from '@/layout/Divider'
import { NextPage } from 'next'
import Question from '@/components/Question'
import { quiz } from 'data'
import Button from '@/ui/Button'

const quizPage: NextPage<IProps> = () => {
	const { title, description, questions } = quiz
	return (
		<div className='flex flex-col gap-6'>
			<div className=''>
				<h1 className='font-bold text-2xl'>{title}</h1>
				<p className='text-gray-700 dark:text-gray-300 mt-2'>{description}</p>
			</div>
			<Divider />
			<div className='flex flex-col gap-4'>
				{questions.map((item, index) => (
					<Question item={item} index={index + 1} key={item.id} />
				))}
			</div>
			<div className=''>
				<Button className='bg-blue-600 dark:bg-blue-600 hover:bg-blue-800 text-white hover:dark:bg-blue-800'>Завершить</Button>
			</div>
		</div>
	)
}

interface IProps {}
export default quizPage
