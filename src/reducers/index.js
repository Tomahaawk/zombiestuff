import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux';
import SurvivorsReducer from './SurvivorsReducer';
import SurvivorFormReducer from './SurvivorFormReducer';
import FlagSurvivorReducer from './FlagSurvivorReducer';
import ReportsReducer from './ReportsReducer';

export default combineReducers ({
  survivorList: SurvivorsReducer,
  survivorForm: SurvivorFormReducer,
  flagges: FlagSurvivorReducer,
  reports: ReportsReducer,
  form: formReducer,
  routing: routerReducer
});
