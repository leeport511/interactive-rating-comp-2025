import { type ReactNode } from 'react';
import type { NumberSelectorProps } from '../interfaces/interfaces';
import { numbers } from '../constants/constants';

export const NumberSelector = ({
	selected,
	handleSelectedBtn,
}: NumberSelectorProps) => {
	return (
		<div className='flex justify-between mb-6'>
			{numbers.map(({ number }): ReactNode => {
				return (
					<button
						key={number}
						className={`bg-grey900 h-10 w-10 md:h-[51px] md:w-[51px] rounded-full cursor-pointer transition-all ease-in ${
							selected === number
								? 'bg-orange500 text-black'
								: 'bg-grey900 text-grey500 hover:text-grey900 hover:bg-white'
						}`}
						onClick={() => handleSelectedBtn(number)}
					>
						<p className='text-[14px] font-bold  text-center leading-[43px]'>
							{number}
						</p>
					</button>
				);
			})}
		</div>
	);
};
