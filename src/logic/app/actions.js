const ROOT = "APP";

export const FETCH = ROOT + '/FETCH'
export const FETCH_SUCCESS = ROOT + '/FETCH_SUCCESS'
export const FETCH_FAILURE = ROOT + '/FETCH_FAILURE'

export const FETCH_ONE = ROOT + '/FETCH_ONE';
export const FETCH_ONE_SUCCESS =  ROOT + '/FETCH_ONE_SUCCESS';
export const FETCH_ONE_ERROR =  ROOT + '/FETCH_ONE_ERROR';

export const SAVE =  ROOT + '/SAVE';
export const SAVE_SUCCESS =  ROOT + '/SAVE_SUCCESS';
export const SAVE_ERROR =  ROOT + '/SAVE_ERROR';

export const DELETE =  ROOT + '/DELETE';
export const DELETE_SUCCESS =  ROOT + '/DELETE_SUCCESS';
export const DELETE_ERROR =  ROOT + '/DELETE_ERROR';
export const TOGGLE_ALL =  ROOT + '/TOGGLE_ALL';
export const TOGGLE_COLLAPSED =  ROOT + '/TOGGLE_COLLAPSED';

export const TOGGLE_BLOCK_UI =  ROOT + '/TOGGLE_BLOCK_UI';


export function fetch(payload) {
  return {
    type: FETCH,
    payload: payload,
    authCall: true
  }
}

export function fetchOne(payload) {
  return {
    type: FETCH_ONE,
    payload: payload,
    authCall: true
  }
}

export function save(payload) {
  return {
    type: SAVE,
    payload: payload,
    authCall: true
  }
}

export function destroy(payload) {
  return {
    type: DELETE,
    payload: payload,
    authCall: true
  }
}

export function getView(width) {
  let newView = "MobileView";
  if (width > 1220) {
    newView = "DesktopView";
  } else if (width > 767) {
    newView = "TabView";
  }
  return newView;
}

export function toggleAll(width, height) {
    const view = getView(width);
    const collapsed = view !== "DesktopView";
    return {
      type: TOGGLE_ALL,
      collapsed,
      view,
      height
    };
}

export const toggleCollapsed = () =>  ({
  type: TOGGLE_COLLAPSED
})

export const toggleBlockUi = (payload) =>  ({
  type: TOGGLE_BLOCK_UI,
  payload
})

