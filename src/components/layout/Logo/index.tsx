import Link from 'next/link'
import { FC } from 'react'

const Logo: FC<IProps> = () => {
	return (
		<Link href='/'>
			<div className=' cursor-pointer flex items-center gap-2 animate-[logo_7s_linear_infinite]'>
				<svg className='w-7' viewBox='0 0 34 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<rect
						className='fill-black dark:fill-white'
						x='32.7701'
						y='12.7161'
						width='2.11143'
						height='32.3752'
						rx='1.05571'
						transform='rotate(80.1755 32.7701 12.7161)'
						fill='white'
					/>
					<rect
						className='fill-black dark:fill-white'
						x='24.2583'
						y='2.15881'
						width='2.11143'
						height='32.3752'
						rx='1.05571'
						transform='rotate(31.7879 24.2583 2.15881)'
						fill='white'
					/>
					<rect
						className='fill-black dark:fill-white'
						x='31.1731'
						y='24.3378'
						width='2.11143'
						height='32.3752'
						rx='1.05571'
						transform='rotate(122.2 31.1731 24.3378)'
						fill='white'
					/>
					<rect
						className='fill-black dark:fill-white'
						x='12.86'
						y='1.2417'
						width='2.11143'
						height='32.3752'
						rx='1.05571'
						transform='rotate(-10 12.86 1.2417)'
						fill='white'
					/>
				</svg>
			</div>
		</Link>
	)
}

interface IProps {}
export default Logo
