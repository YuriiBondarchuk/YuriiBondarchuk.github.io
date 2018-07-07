import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Sneakers from './Sneakers';
import { Router, Route, browserHistory } from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import Notfound from './Notfound';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}/>

        <Route path="/adidas" render component={Sneakers} />
        <Route path="*" component={Notfound} />


    </Router> , document.getElementById('root'));
registerServiceWorker();
