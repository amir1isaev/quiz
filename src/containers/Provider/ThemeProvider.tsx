import { FC, ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'

const ThemesProvider: FC<IProps> = ({ children }) => {
	return (
		<ThemeProvider defaultTheme='dark' enableSystem={true} attribute='class'>
			{children}
		</ThemeProvider>
	)
}

interface IProps {
	children: ReactNode
}
export default ThemesProvider
