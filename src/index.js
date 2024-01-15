import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import TrackProvider from './context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <TrackProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </TrackProvider>

    </React.StrictMode>
);


