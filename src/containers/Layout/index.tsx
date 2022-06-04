import Footer from '@/layout/Footer'
import Header from '@/layout/Header'
import Main from '@/layout/Main'
import { FC, ReactNode } from 'react'
import Provider from '../Provider'

const Layout: FC<IProps> = ({ children }) => {
	return (
		<Provider>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</Provider>
	)
}

interface IProps {
	children: ReactNode
}
export default Layout
