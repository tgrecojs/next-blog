import autodux from 'autodux';
// import cuid from 'cuid';

const getPosts = state => state.posts;

const id = x => x;

const defaultState = {
  num: 1,
  queue: [
    { id: '1111334556', text: 'I am a tweet!'},
    { id: '7771334556', text: 'I am a second tweet!'},
    { id: '2211334556', text: 'I am a third tweet!'}
  ],
  newTweet: {}
};



const getTweets = state => state.queue;

const tweetsSlice = autodux({
  slice: 'tweets',
  initial: defaultState,
  actions: {
    multiply: {
      reducer: (state, payload) => state.num * payload
    },
    submit: {
      reducer: (state, payload) =>  `state: ${state} payload: ${payload}`
    }
  },
  selectors: {
    getValue: id,
    getTweets
  }
});

const {
  selectors,
  initial,
  actions,
  slice,
  reducer
} = tweetsSlice;

export { selectors, initial, actions, slice, reducer };

export default tweetsSlice;
