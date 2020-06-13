import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Devices  } from './devices';
import { Groups  } from './groups';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
export const ConfigureStore = () => {
    const store = createStore(
      combineReducers({
          devices: Devices,
          groups: Groups
      }),
        applyMiddleware(thunk, logger)
    );

    return store;
}
