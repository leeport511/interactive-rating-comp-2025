import { NumberSelector } from '../components/NumberSelector';
import { StarIcon } from '../components/StarIcon';
import { SubmitButton } from '../components/SubmitButton';

export const MainPage = () => {
	return (
		<section className='w-[360px] h-[327px] p-6 bg-radial from-gr-start to-gr-end'>
			<StarIcon />
			<div>
				<h2>How did we do?</h2>
				<p>
					Please let us know how we did with your support
					request. All feedback is appreciated to help us
					improve our offering!
				</p>
			</div>
			<NumberSelector />
			<SubmitButton />
		</section>
	);
};
