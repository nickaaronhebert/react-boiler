export default function (state={
	currentUser: null,
	sessionToken: null,
  authenticated: false,
  invite: {},
  activeOrganization: {}
}, action) {
 let stateCopy = {...state};
 switch (action.type) {
 	
	default:
     return state;
 }
}