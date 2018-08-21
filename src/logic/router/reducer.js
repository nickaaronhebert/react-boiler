import * as actions from './actions'; 
export default function (state={
	items: [],
	item: null,
  params: {},
  isLoading: false,
  isLoaded: false,
  isConfigured: false
}, action) {
 let stateCopy = {...state};
 switch (action.type) {
  case actions.FETCH_ONE_SUCCESS:
  	stateCopy.item = action.payload;
    return {...stateCopy};
  case actions.FETCH_MANY_SUCCESS:
  	stateCopy.items = action.payload;
    return {...stateCopy};
  case actions.SET_PARAMETERS: 
    stateCopy.parameters = action.payload;
    return {...stateCopy};
  case actions.CONFIGURE_ROUTE: 
    stateCopy.parameters = action.payload.match;
    stateCopy.isLoading = true;
    stateCopy.isLoaded = false;
    return {...stateCopy};
  case actions.CONFIGURE_ROUTE_SUCCESS: 
    stateCopy.isLoading = false;
    stateCopy.isConfigured = true;
    return {...stateCopy};
  case actions.RESET_ROUTE_STATE: 
    stateCopy.isLoading = false;
    stateCopy.isLoaded = false;
    stateCopy.isConfigured = false;
    return {...stateCopy}
  default:
     return state;
 }
}