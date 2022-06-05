import { FC, ReactNode } from 'react'
import Container from '../Container'

const Main: FC<IProps> = ({ children }) => {
	return (
		<main className='flex-1 pt-7 '>
			<Container className='h-full'> {children} </Container>
		</main>
	)
}

interface IProps {
	children: ReactNode
}
export default Main
