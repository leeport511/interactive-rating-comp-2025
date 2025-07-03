import { useEffect, useRef, useState } from 'react';
import { MainPage } from './pages/MainPage';
import { ThanksPage } from './pages/ThanksPage';

function InteractiveRatingComponentApp() {
	const [selectedNumber, setSelectedNumber] = useState<
		number | null
	>(null);
	const [isSecondScreen, setIsSecondScreen] = useState(false);
	const clickHandleRef = useRef(false);

	const handleSelectedBtn = (num: number) => {
		const nextValue = selectedNumber === num ? null : num;
		setSelectedNumber(nextValue);
	};

	const handleSubmitBtn = () => {
		setIsSecondScreen(true);
		console.log(isSecondScreen);
	};

	useEffect(() => {
		if (isSecondScreen) {
			clickHandleRef.current = false;

			const handleGlobalClick = () => {
				if (!clickHandleRef.current) {
					clickHandleRef.current = true;
					setIsSecondScreen(false);
				}
			};

			const timer = window.setTimeout(() => {
				document.addEventListener('click', handleGlobalClick);
			}, 0);

			return () => {
				clearTimeout(timer);
				document.removeEventListener(
					'click',
					handleGlobalClick
				);
			};
		}
	}, [isSecondScreen]);

	return (
		<main className='font-overpass bg-grey950 w-screen h-screen m-auto flex justify-center items-center'>
			{isSecondScreen ? (
				<ThanksPage selectedNumber={selectedNumber} />
			) : (
				<MainPage
					selected={selectedNumber}
					handleSelectedBtn={handleSelectedBtn}
					handleSubmitBtn={handleSubmitBtn}
				/>
			)}
		</main>
	);
}

export default InteractiveRatingComponentApp;
