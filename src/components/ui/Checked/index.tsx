import { FC, ReactNode } from 'react'

const Checkbox: FC<IProps> = (p) => {
	const { id, children, name } = p
	return (
		<div>
			<input className='input-button checkbox-button' type='checkbox' id={id} name={name} />
			<label htmlFor={id}>{children}</label>
		</div>
	)
}

interface IProps {
	id: string
	name: string
	children?: ReactNode
}
export default Checkbox
