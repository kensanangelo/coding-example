import ReactDOM from 'react-dom/client';
import './index.scss';
import { DogProvider } from './contexts/dogContext';
import App from './App';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<DogProvider>
		<App />
	</DogProvider>
);
