import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {ContentBlock1, ContentBlock2} from './content-blocks';

const contentBlockMappings = {"content-block-1": ContentBlock1, "content-block-2": ContentBlock2}

ReactDOM.render(
    <App contentBlockComponents={contentBlockMappings}/>,
    document.getElementById('root')
);
registerServiceWorker();
