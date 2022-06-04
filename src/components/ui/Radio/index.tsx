import { FC, ReactNode } from 'react'

const Radio: FC<IProps> = (p) => {
	const { id, children } = p
	return (
		<p>
			<input type='radio' id={id} name='radio-group' className='input-button radio-button' />
			<label htmlFor={id}>{children}</label>
		</p>
	)
}

interface IProps {
	id: string
	children: ReactNode
}
export default Radio
