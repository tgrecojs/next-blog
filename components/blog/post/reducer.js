
import dsm from 'redux-dsm';
// redux-dsm * "It just works"
// https://github.com/ericelliott/redux-dsm
// ['action', 'next state']
//   ['scoped-action', 'another-state']
const singlePostState = [
  [ 'initialize', 'idle',
    ['post selected', 'fetching-post',
      ['cancel', 'idle'],
      ['report success', 'fetching-post-success'],
      ['report error', 'fetching-post-error',
        ['handle error', 'idle']
      ]
    ]
  ]
];


export const dismissErrorAction = () => ({ type: 'DISMISS_ERROR' });

const individualPostDSM = dsm({
  component: 'post',
  description: 'async calls to fetch individual post',
  actionStates: singlePostState
});

export const getAuthStatus = state => state.auth.status;

const { actionCreators:
    { initialize: initializeBlog,
      postSelected,
      reportSuccess,
      reportError,
      handleError,
      fetchPosts,
      cancel}
} = individualPostDSM;

export default individualPostDSM;
export {
  initializeBlog,
  reportSuccess,
  postSelected,
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
