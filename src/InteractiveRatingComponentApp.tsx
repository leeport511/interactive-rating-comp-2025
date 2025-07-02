import { useState } from 'react';
import { MainPage } from './pages/MainPage';
import { ThanksPage } from './pages/ThanksPage';

function InteractiveRatingComponentApp() {
	const [selectedNumber, setSelectedNumber] = useState<
		number | null
	>(null);

	const handleSelectedBtn = (num: number) => {
		const nextValue = selectedNumber === num ? null : num;
		console.log(nextValue);
		setSelectedNumber(nextValue);
	};

	const handleSubmitBtn = () => {
		console.log('hice click');
	};

	return (
		<main className='font-overpass bg-grey950 w-screen h-screen m-auto flex justify-center items-center'>
			<MainPage
				selected={selectedNumber}
				handleSelectedBtn={handleSelectedBtn}
				handleSubmitBtn={handleSubmitBtn}
			/>
			<ThanksPage selectedNumber={selectedNumber} />
		</main>
	);
}

export default InteractiveRatingComponentApp;
