import * as actions from './actions';

const initState = {
  collapsed: window.innerWidth > 1220 ? false : true,
  view: actions.getView(window.innerWidth),
  height: window.innerHeight,
  openDrawer: false,
  blockUi: false,
  blockMessage: "Please Wait"
};

export default function appReducer(state = initState, action) {
  switch (action.type) {
    case actions.COLLPSE_CHANGE:
      return {
        ...state,
        collapsed: !state.collapsed
      };
    case actions.COLLPSE_OPEN_DRAWER:
      return {
        ...state,
        openDrawer: !state.openDrawer
      };
    case actions.TOGGLE_ALL:
      if (state.view !== action.view || action.height !== state.height) {
        const height = action.height ? action.height : state.height;
        return {
          ...state,
          collapsed: action.collapsed,
          view: action.view,
          height
        };
      }
      break;
    case actions.TOGGLE_COLLAPSED:
      return {
        ...state,
        collapsed: !state.collapsed
      };
      break;
    case actions.TOGGLE_BLOCK_UI:
      return {
        ...state,
        blockUi: !state.blockUi,
        blockMessage: action.payload.message
      };
      break;
    default:
      return state;
  }
  return state;
}
