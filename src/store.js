import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { logger } from 'redux-logger';


const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

export default createStoreWithMiddleware(reducers);
