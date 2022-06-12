import React from "react";
import ReacrDOM from 'react-dom'

import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContexProvider';

ReacrDOM.render(

<ContextProvider>
    <App />
</ContextProvider>, 
document.getElementById('root'));

