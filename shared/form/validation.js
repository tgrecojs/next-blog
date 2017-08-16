const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

const required = value => (value ? undefined : 'Required');

const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more. You can be a little more elaborate than that, can't you!?` : undefined;

const minLength60 = minLength(60);

export { email, minLength, minLength60, required };
