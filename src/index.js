import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App'; // => App.js ['ll be in the same folder as index.js]

//ReactDom is part of the React Library that has a method createRoot
//It's fetching the root element from the html file and making it 
//the root/ main elemennt of all the other elements
//div is the most common root ele
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
//<App /> => component

