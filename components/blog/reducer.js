
import dsm from 'redux-dsm';
// redux-dsm * "It just works"
// https://github.com/ericelliott/redux-dsm
// ['action', 'next state']
//   ['scoped-action', 'another-state']
const blogStates = [
  ['initialize', 'fetching-posts',
    ['cancel', 'idle'],
    ['report success', 'fetching-posts-success'],
    ['report error', 'fetching-posts-error',
      ['handle error', 'idle']
    ]
  ]
];


export const dismissErrorAction = () => ({ type: 'DISMISS_ERROR' });

const authDSM = dsm({
  component: 'blog',
  description: 'async calls to blogger',
  actionStates: blogStates
});

export const getAuthStatus = state => state.auth.status;

const { actionCreators:
    {initialize: initializeBlog,
      reportSuccess,
      reportError,
      handleError,
      fetchPosts,
      cancel}
} = authDSM;

export default authDSM;
export {  reportSuccess,
  initializeBlog,
  reportError,
  handleError,
  fetchPosts,
  cancel
};
/** 

export const INITIALIZE_BLOG = 'INITIALIZE_BLOG';
export const INITIALIZE_BLOG_SUCCESS = 'INITIALIZE_BLOG_SUCCESS';
export const POST_SELECTED = 'POST_SELECTED';
export const SELECTED_POST_SUCCESS = 'SELECTED_POST_SUCCESS';




export const initializeBlog = ({
  BLOGGER_API_KEY = ''
} = {}) => ({
  type: INITIALIZE_BLOG,
  payload: {
    BLOGGER_API_KEY
  }
});

const parsePost = (payload) => payload.map(x => {
  return Object.assign({}, {
    id: x.id,
    title: x.title,
    content: x.content
  });
});

export const selectPost = ({ title, id, content} = {}) => ({
  type: POST_SELECTED,
  payload: id
});

const reducer = (state = {}, action = {}) => {
  const { payload, type } = action;
  switch (type) {
    case INITIALIZE_BLOG_SUCCESS: return { ...state, selectedPost: {},  posts: parsePost(payload)};
    case POST_SELECTED: return { ...state, selectedPost: payload  };
    default: return state;
  }
};

export default reducer;


*/
