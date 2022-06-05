import { FC } from 'react'
import { Segment } from 'src/core/interface'

const Segment: FC<IProps> = (p) => {
	const { items, value, onChange } = p
	return (
		<div>
			<div className='inline-flex h-9 rounded-lg items-center overflow-hidden  dark:bg-zinc-800 bg-zinc-100'>
				{items.map((item) => (
					<div
						onClick={() => onChange(item.slug)}
						key={item.id}
						className={[
							value === item.slug ? 'bg-blue-600 text-white' : 'hover:dark:bg-zinc-700',
							'px-3 py-2 h-full cursor-pointer flex items-center justify-center  ',
						].join(' ')}
					>
						{item.title}
					</div>
				))}
			</div>
		</div>
	)
}

interface IProps {
	items: Segment[]
	value: string
	onChange: (value: string) => void
}
export default Segment
