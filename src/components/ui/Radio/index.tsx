import { FC, ReactNode } from 'react'

const Radio: FC<IProps> = (p) => {
	const { id, children, name, onChange, checked } = p
	return (
		<p>
			<input onChange={onChange} checked={checked} type='radio' id={id} name={name} className='input-button radio-button' />
			<label htmlFor={id}>{children}</label>
		</p>
	)
}

interface IProps {
	id: string
	name: string
	children?: ReactNode
	checked: boolean
	onChange: () => void
}
export default Radio
