import { FC } from 'react'

const Input: FC<IProps> = (p) => {
	const { placeholder, value, onChange, className } = p
	return (
		<input
			value={value}
			onChange={(e) => onChange(e.target.value)}
			className={['w-full bg-transparent outline-none focus:outline-blue-600/50 p-0.5 rounded', className].join(' ')}
			placeholder={placeholder}
		></input>
	)
}

interface IProps {
	placeholder: string
	className?: string
	value: string
	onChange: (value: string) => void
}
export default Input
