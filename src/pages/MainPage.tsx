import { NumberSelector } from '../components/NumberSelector';
import { StarIcon } from '../components/StarIcon';
import { SubmitButton } from '../components/SubmitButton';
import type { MainPageProps } from '../interfaces/interfaces';

export const MainPage = ({
	selected,
	handleSelectedBtn,
	handleSubmitBtn,
}: MainPageProps) => {
	return (
		<section className='w-[327px] rounded-[15px] p-6 bg-radial from-gr-start to-gr-end'>
			<StarIcon />
			<div className='mb-4'>
				<h2 className='mb-4 font-bold leading-7 text-2xl text-white'>
					How did we do?
				</h2>
				<p className='text-[14px] leading-[22px] font-medium text-grey500'>
					Please let us know how we did with your support
					request. All feedback is appreciated to help us
					improve our offering!
				</p>
			</div>
			<NumberSelector
				selected={selected}
				handleSelectedBtn={handleSelectedBtn}
			/>
			<SubmitButton handleSubmitBtn={handleSubmitBtn} />
		</section>
	);
};

// TODO: HAcer logica del submiy para cambiar de pagina
