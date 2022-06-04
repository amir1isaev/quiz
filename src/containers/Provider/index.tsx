import { ThemeProvider } from 'next-themes'
import { FC, ReactNode } from 'react'

const Provider: FC<IProps> = ({ children }) => {
	return <ThemeProvider>{children}</ThemeProvider>
}

interface IProps {
	children: ReactNode
}
export default Provider
