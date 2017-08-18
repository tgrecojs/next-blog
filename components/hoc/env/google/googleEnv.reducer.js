export const INITIALIZE_BLOG = 'INITIALIZE_BLOG';

export const initializeBlog = ({
  BLOGGER_API_KEY = ''
} = {}) => ({
  type: INITIALIZE_BLOG,
  payload: {
    BLOGGER_API_KEY
  }
});
