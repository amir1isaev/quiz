import { FC, ReactNode } from 'react'

const Checkbox: FC<IProps> = (p) => {
	const { id, children } = p
	return (
		<p>
			<input className='input-button checkbox-button' type='checkbox' id={id} name='checkbox-group' />
			<label htmlFor={id}>{children}</label>
		</p>
	)
}

interface IProps {
	id: string
	children: ReactNode
}
export default Checkbox
