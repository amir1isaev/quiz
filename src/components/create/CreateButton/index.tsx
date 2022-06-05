import { FC } from 'react'

const CreateButton: FC<IProps> = (p) => {
	const { className, onClick } = p
	return (
		<div
			onClick={onClick}
			className={[
				'active:scale-90 duration-150 p-1 cursor-pointer border-2 rounded-full inline-flex border-blue-600/50 hover:border-blue-600 border-dashed w-9 h-9 justify-center items-center',
				className,
			].join(' ')}
		>
			<svg className='w-full h-full' width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path className='stroke-blue-600' d='M12 12H4M12 20V12V20ZM12 12V4V12ZM12 12H20H12Z' strokeWidth='2' strokeLinecap='round' />
			</svg>
		</div>
	)
}

interface IProps {
	onClick: () => void

	className?: string
}
export default CreateButton
