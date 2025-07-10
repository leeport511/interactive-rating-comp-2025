import { numbers } from '../constants/constants';
import type { SelectedPointsProps } from '../interfaces/interfaces';

export const SelectedPointsMessage = (props: SelectedPointsProps) => {
	return (
		<div className='mb-6 md:mb-8 px-4 py-1 md:py-[6px] md:px-[19.5px] bg-grey900 rounded-[22.5px]'>
			<p className='text-orange500 text-[14px] md:text-[15px]'>
				{`You selected ${props.selectedNumber} of ${numbers.length}`}
			</p>
		</div>
	);
};
