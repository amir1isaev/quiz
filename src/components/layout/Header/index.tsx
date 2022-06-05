import { FC } from 'react'
import Container from '../Container'
import Logo from '../Logo'
import Menu from '../Menu'

const Header: FC<IProps> = () => {
	return (
		<header className='dark:bg-black/80 bg-white/80 h-14  flex items-center justify-center  w-full backdrop-blur-sm border-b-2  border-zinc-200 dark:border-zinc-900'>
			<Container>
				<div className='flex gap-4 justify-center items-center '>
					<Logo />
					{/* <Menu /> */}
				</div>
			</Container>
		</header>
	)
}

interface IProps {}
export default Header
