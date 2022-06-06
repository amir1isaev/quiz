import { FC, ReactNode } from 'react'

const Checkbox: FC<IProps> = (p) => {
	const { id, children, name, checked, onChange } = p
	return (
		<div>
			<input onChange={onChange} checked={checked} className='input-button checkbox-button' type='checkbox' id={id} name={name} />
			<label htmlFor={id}>{children}</label>
		</div>
	)
}

interface IProps {
	id: string
	name: string
	children?: ReactNode
	checked: boolean
	onChange: () => void
}
export default Checkbox
