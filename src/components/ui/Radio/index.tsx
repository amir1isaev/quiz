import { FC, ReactNode } from 'react'

const Radio: FC<IProps> = (p) => {
	const { id, children, name } = p
	return (
		<p>
			<input type='radio' id={id} name={name} className='input-button radio-button' />
			<label htmlFor={id}>{children}</label>
		</p>
	)
}

interface IProps {
	id: string
	name: string
	children?: ReactNode
}
export default Radio
