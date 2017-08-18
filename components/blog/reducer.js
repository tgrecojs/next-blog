export const INITIALIZE_BLOG = 'INITIALIZE_BLOG';
export const INITIALIZE_BLOG_SUCCESS = 'INITIALIZE_BLOG_SUCCESS';

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
    title: x.title,
    content: x.content
  });
});

const reducer = (state = [], action = {}) => {
  const { payload, type } = action;
  switch (type) {
    case INITIALIZE_BLOG_SUCCESS: return {
      posts: parsePost(payload)
    };
    default: return state;
  }
};

export default reducer;

