import { numbers } from '../constants/constants';
import type { SelectedPointsProps } from '../interfaces/interfaces';

export const SelectedPointsMessage = (props: SelectedPointsProps) => {
	return (
		<div className='mb-6 px-4 py-1 bg-grey900 rounded-[22.5px]'>
			<p className='text-orange500 text-[14px]'>
				{`You selected ${props.selectedNumber} of ${numbers.length}`}
			</p>
		</div>
	);
};
