import type { ReactNode } from 'react';
import type { Number } from '../interfaces/interfaces';

const numbers: Number[] = [
	{ number: 1 },
	{ number: 2 },
	{ number: 3 },
	{ number: 4 },
	{ number: 5 },
];
export const NumberSelector = () => {
	return (
		<div className='flex justify-between'>
			{numbers.map(({ number }): ReactNode => {
				return (
					<div
						key={number}
						className='bg-grey900 h-10 w-10 rounded-full'
					>
						<p className='text-[14px] font-bold text-grey500 text-center leading-[43px]'>
							{number}
						</p>
					</div>
				);
			})}
		</div>
	);
};
