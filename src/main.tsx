import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import InteractiveRatingComponentApp from './InteractiveRatingComponentApp.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<InteractiveRatingComponentApp />
	</StrictMode>
);
