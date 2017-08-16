import test from 'tape';
import { selectors, initial, actions, slice, reducer } from './reducer';
const {
  getValue
} = selectors;

const {
  submit, 
  multiply
} = actions;

const createState = (props = {}) => Object.assign({}, initial, props);

test('submit()', assert => {
  const msg = 'should have an action type and a payload.'
  const payload = {
    id: '12344',
    text: 'some text'
  };
  const actual = submit(payload);
  const expected = {type: submit().type, 
    payload};

  assert.same(actual, expected, msg);
  assert.end();
});
test('multiply', assert => {
  const msg = 'should multiply the state by the payload.';

  const payload = 3;
  const actual = multiply(payload);
  const expected = 3; // 3 * 1
  
  assert.same(actual, expected, msg);
  assert.end();
})
test('AddPost State', nest => {
  nest.test('with default args', assert => {
    const msg = 'should return the default state.';

    const actual = reducer();
    const expected = createState();
    assert.same(actual, expected, msg);
    assert.end();
  });
  nest.test('given a submit action', assert => {
    const msg = 'should add the newTweet object to the queue array';

    const initialState = reducer();
    const payload = {
      id: '123456',
      text: 'New tweet'
    };
    const actual = reducer(initial, submit(payload));
    const expected = createState({
      queue: Object.assign([], initial.queue, { payload })
    });

    assert.same(actual, expected, msg);
    assert.end();
  });
});
