import { FC, useRef, useEffect } from 'react'

const Textarea: FC<IProps> = (p) => {
	const { placeholder, value, onChange, className } = p
	const valueRef = useRef<HTMLTextAreaElement>(null)

	useEffect(() => {
		if (valueRef && valueRef.current) {
			valueRef.current.style.height = '0px'
			const scrollHeight = valueRef.current.scrollHeight
			valueRef.current.style.height = scrollHeight + 'px'
		}
	}, [value])

	return (
		<textarea
			ref={valueRef}
			value={value}
			onChange={(e) => onChange(e.target.value)}
			className={['w-full bg-transparent resize-none outline-none focus:outline-blue-600/50 p-0.5 rounded', className].join(' ')}
			placeholder={placeholder}
		></textarea>
	)
}

interface IProps {
	placeholder: string
	className?: string
	value: string
	onChange: (value: string) => void
}
export default Textarea
