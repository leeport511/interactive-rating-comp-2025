import React from 'react';
import { CreditCardImage } from '../components/CreditCardImage';
import { SelectedPointsMessage } from '../components/SelectedPointsMessage';

export const ThanksPage = () => {
	return (
		<section className='w-[360px] rounded-[15px] px-6 py-8 bg-radial from-gr-start to-gr-end flex flex-col items-center'>
			<CreditCardImage />
			<SelectedPointsMessage />
			<div className='text-center'>
				<h2 className='text-white text-2xl font-bold leading-7 capitalize mb-4'>
					thank you!
				</h2>
				<p className='text-grey500 text-[14px] leading-5'>
					We appreciate you taking the time to give a
					rating. If you ever need more support, don’t
					hesitate to get in touch!
				</p>
			</div>
		</section>
	);
};
