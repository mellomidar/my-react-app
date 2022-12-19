import {createRoot} from 'react-dom/client';
import Dog from './App.js';

const root = createRoot(document.getElementById('root'));
root.render(<Dog breed='German Shepherd'/>);