import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './Routers';
import registerServiceWorker from './registerServiceWorker';
import './semantic/dist/semantic.min.css';

ReactDOM.render(<Routers/>, document.getElementById('root'));
registerServiceWorker();

if(module.hot){
    module.hot.accept();
}
