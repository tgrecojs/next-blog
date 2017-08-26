export const SHOW_MODAL = 'SHOW_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';


const reducer = (state = false, action = {}) => {
  const { payload, type } = action;
  switch (type) {
    case SHOW_MODAL: return true; 
    case CLOSE_MODAL: return false;
    default: return state;
  }
};


export const showModalAction = () => ({ type: SHOW_MODAL });

export const hideModalAction = () => ({ type: CLOSE_MODAL });

export default reducer;
