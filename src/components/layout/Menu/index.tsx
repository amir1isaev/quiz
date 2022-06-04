import Link from 'next/link'
import { FC } from 'react'

const Menu: FC<IProps> = () => {
	return (
		<nav>
			<ul className='flex gap-4 items-center '>
				<Link href='/login'>
					<li className='text-gray-400 cursor-pointer duration-150 hover:text-primary'>Войти *</li>
				</Link>
			</ul>
		</nav>
	)
}

interface IProps {}
export default Menu
