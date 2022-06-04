import { FC, ReactNode } from 'react'

const Container: FC<IProps> = ({ children, className }) => {
	return <div className={['max-w-4xl mx-auto px-4 py-2 w-full', className].join(' ')}>{children}</div>
}

interface IProps {
	children: ReactNode
	className?: string
}
export default Container
