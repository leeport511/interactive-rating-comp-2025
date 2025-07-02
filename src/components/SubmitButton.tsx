import type { SubmitBtnProps } from '../interfaces/interfaces';

export const SubmitButton = ({ handleSubmitBtn }: SubmitBtnProps) => {
	return (
		<div className='flex justify-center'>
			<button
				type='submit'
				className='text-center uppercase text-[14px] font-[700] tracking-[1.87px] w-full h-[45px] bg-orange500 hover:bg-white cursor-pointer rounded-[22.5px] transition-all ease-in'
				onClick={handleSubmitBtn}
			>
				submit
			</button>
		</div>
	);
};
