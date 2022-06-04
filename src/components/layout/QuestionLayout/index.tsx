import { FC, ReactNode } from 'react'

const QuestionLayout: FC<IProps> = ({ children }) => {
	return <div className='bg-white  dark:bg-zinc-900 rounded-lg px-5 py-4'>{children}</div>
}

interface IProps {
	children: ReactNode
}
export default QuestionLayout
