import React from 'react';
import renderField from '../../shared/form/renderField';
import { Field, reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import { submitTweetAction } from './reducer';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectors, actions } from './reducer';
const { submit } = actions;
const { getValue } = selectors;

import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import renderSelectField from '../../shared/form/selectField';
import { email, minLength60, required } from '../../shared/form/validation';




const handleSubmit = (val) => console.log(`${val}`);

const handleChange = e => ({
  type: 'TEXT_AREA_CHANGED',
  payload: e.target.value
});


const onSubmit = vals => ({
  type: 'FORM_SUBMITTED',
  payload: vals
});


let ContactForm = props => {
  const { handleSubmit, onSubmit, pristine } = props;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field
        name="name"
        component={renderField}
        validate={[required]}
        label="Your Name"
      />
      <Field
        name="companyName"
        component={renderField}
        label="Company Name"
      />
      <Field
        name="email"
        component={renderField}
        validate={[required, email]}
        label="Email"
      />
      <Field
        name="favoriteColor"
        component={renderSelectField}
        label="Favorite Color"
      >
        <MenuItem value="JavaScript Development Opportunity" primaryText="JavaScript Development" />
        <MenuItem value="Writing or educational video inquiry" primaryText="Writing or Video Content" />
        <MenuItem value="Other Teaching Inquiry" primaryText="Other Teaching Inquiry" />
      </Field>
      <Field name="addtionalInfo"
        component={renderField}
        validate={[required, minLength60]}
        label="Additional info regarding why you're reching out"
        rows={4}
      />
      <div>
        <RaisedButton type="submit" label="Submit"  primary={true} />
      </div>
    </form>
  );
};

export default connect(undefined, {
  onSubmit
})(reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactForm));


export const addPost = ({newTweet, submit, handleChange, submitPostStyles = 'submit-post', textInput = 'Add a tweet'}) =>
  (
    <div className={submitPostStyles}>

      <input ref={newTweet} onChange={handleChange} type="text"/>
      <button onClick={(newTweet) => console.log(newTweet)}>Submit</button>
    </div>
  );


const mapState = state => ({
  newTweet: getValue(state),
  text: state.text
});

// export default connect(mapState, { submit, handleChange })(addPost);
