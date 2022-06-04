import { FC, ReactNode } from 'react'

const Button: FC<IProps> = (p) => {
	const { children, className } = p
	const defaultClassName = className ?? 'hover:dark:bg-zinc-700 dark:bg-zinc-800 bg-zinc-100'
	return (
		<button className={[defaultClassName, ' duration-150  font-medium   px-3 py-2 h-9 items-center justify-center inline-flex rounded-lg'].join(' ')}>
			{children}
		</button>
	)
}

interface IProps {
	children: ReactNode
	className?: string
}
export default Button
