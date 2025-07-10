import { CreditCardImage } from '../components/CreditCardImage';
import { SelectedPointsMessage } from '../components/SelectedPointsMessage';
import type { ThanksPageProps } from '../interfaces/interfaces';

export const ThanksPage = (props: ThanksPageProps) => {
	return (
		<section className='w-[360px] md:w-[412px] rounded-[15px] px-6 py-8 md:px-8 md:py-10 bg-radial from-gr-start to-gr-end flex flex-col items-center'>
			<CreditCardImage />
			<SelectedPointsMessage
				selectedNumber={props.selectedNumber}
			/>
			<div className='text-center'>
				<h2 className='text-white text-2xl md:text-[28px] font-bold leading-7 capitalize mb-4'>
					thank you!
				</h2>
				<p className='text-grey500 text-[14px] md:text-[15px] leading-5'>
					We appreciate you taking the time to give a
					rating. If you ever need more support, don’t
					hesitate to get in touch!
				</p>
			</div>
		</section>
	);
};
